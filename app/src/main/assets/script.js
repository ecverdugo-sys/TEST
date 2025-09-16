document.getElementById("fileInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) {
    alert("No seleccionaste ningún archivo.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("preview").textContent = e.target.result;
  };
  reader.onerror = function () {
    alert("Error al leer el archivo.");
  };
  reader.readAsText(file, "UTF-8");
});
