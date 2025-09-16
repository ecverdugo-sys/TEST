package com.example.quiztemas

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.webkit.*
import androidx.activity.ComponentActivity
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView

class MainActivity : ComponentActivity() {

    private var filePathCallback: ValueCallback<Array<Uri>>? = null
    private lateinit var filePickerLauncher: ActivityResultLauncher<Intent>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Launcher que recibe el archivo elegido por el usuario y se lo entrega al WebView
        filePickerLauncher =
            registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
                val uris: Array<Uri>? = if (result.resultCode == Activity.RESULT_OK) {
                    val data = result.data
                    when {
                        data?.data != null -> arrayOf(data.data!!)
                        data?.clipData != null -> {
                            val count = data.clipData!!.itemCount
                            Array(count) { i -> data.clipData!!.getItemAt(i).uri }
                        }
                        else -> null
                    }
                } else null
                filePathCallback?.onReceiveValue(uris ?: emptyArray())
                filePathCallback = null
            }

        setContent {
            AndroidView(
                modifier = Modifier.fillMaxSize(),
                factory = { context ->
                    WebView(context).apply {
                        with(settings) {
                            javaScriptEnabled = true
                            domStorageEnabled = true
                            allowFileAccess = true
                            allowContentAccess = true
                            // por si tu HTML usa fetch() a ficheros locales
                            setSupportMultipleWindows(false)
                        }

                        webViewClient = object : WebViewClient() {
                            override fun shouldOverrideUrlLoading(
                                view: WebView?,
                                request: WebResourceRequest?
                            ): Boolean = false
                        }

                        // *** CLAVE: file chooser para <input type="file"> ***
                        webChromeClient = object : WebChromeClient() {
                            override fun onShowFileChooser(
                                webView: WebView?,
                                filePathCallback: ValueCallback<Array<Uri>>?,
                                fileChooserParams: FileChooserParams?
                            ): Boolean {
                                this@MainActivity.filePathCallback?.onReceiveValue(null)
                                this@MainActivity.filePathCallback = filePathCallback

                                // MIME para TXT (y permite también elegir cualquier archivo si hiciera falta)
                                val intent = fileChooserParams?.createIntent()?.apply {
                                    type = "text/plain"
                                    putExtra(Intent.EXTRA_MIME_TYPES, arrayOf("text/plain"))
                                    addCategory(Intent.CATEGORY_OPENABLE)
                                } ?: Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
                                    addCategory(Intent.CATEGORY_OPENABLE)
                                    type = "text/plain"
                                }

                                return try {
                                    filePickerLauncher.launch(intent)
                                    true
                                } catch (e: Exception) {
                                    this@MainActivity.filePathCallback?.onReceiveValue(null)
                                    this@MainActivity.filePathCallback = null
                                    false
                                }
                            }
                        }

                        // Carga tu app web local desde /assets
                        loadUrl("file:///android_asset/index.html")
                    }
                }
            )
        }
    }
}
