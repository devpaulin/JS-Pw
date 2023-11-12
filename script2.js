// script.js
function converterParaFahrenheit() {
    var tempCelsius = parseFloat(document.getElementById("tempInput").value);
    var tempFahrenheit = (tempCelsius * 1.8) + 32;
    document.getElementById("resultado").textContent = tempCelsius + "°C é igual a " + tempFahrenheit.toFixed(2) + "°F";
  }
  
  function converterParaCelsius() {
    var tempFahrenheit = parseFloat(document.getElementById("tempInput").value);
    var tempCelsius = (tempFahrenheit - 32) / 1.8;
    document.getElementById("resultado").textContent = tempFahrenheit + "°F é igual a " + tempCelsius.toFixed(2) + "°C";
  }
  