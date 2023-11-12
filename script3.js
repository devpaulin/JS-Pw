function calcularTotal() {
    var valor1 = parseFloat(document.getElementById("valor1").value) || 0;
    var quantidade1 = parseInt(document.getElementById("quantidade1").value) || 0;
    var valor2 = parseFloat(document.getElementById("valor2").value) || 0;
    var quantidade2 = parseInt(document.getElementById("quantidade2").value) || 0;
    var valor3 = parseFloat(document.getElementById("valor3").value) || 0;
    var quantidade3 = parseInt(document.getElementById("quantidade3").value) || 0;

    var total = (valor1 * quantidade1) + (valor2 * quantidade2) + (valor3 * quantidade3);

    document.getElementById("totalVenda").textContent = total.toFixed(2);
}