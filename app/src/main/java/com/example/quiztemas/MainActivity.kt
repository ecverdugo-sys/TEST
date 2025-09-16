package com.example.quiztemas

import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.DisposableEffect
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            // Un WebView que carga tu app web desde assets
            AndroidView(
                modifier = Modifier.fillMaxSize(),
                factory = { context ->
                    WebView(context).apply {
                        settings.javaScriptEnabled = true            // habilita JS
                        settings.domStorageEnabled = true            // localStorage, etc.
                        webChromeClient = WebChromeClient()
                        webViewClient = WebViewClient()
                        // Carga el index.html empaquetado en /assets
                        loadUrl("file:///android_asset/index.html")
                    }
                },
                update = { /* nada */ }
            )

            // Cierra limpio el WebView cuando se destruya la composición
            DisposableEffect(Unit) { onDispose { } }
        }
    }
}
