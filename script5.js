function calcularCustoPiso() {
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const largura = parseFloat(document.getElementById("largura").value);
    const resultadoElement = document.getElementById("resultado");

    if (!isNaN(comprimento) && !isNaN(largura)) {
        const precoPorMetroQuadrado = 36.00;
        const areaCoomodo = comprimento * largura;
        const custoTotal = precoPorMetroQuadrado * areaCoomodo;
        resultadoElement.innerHTML = `O custo total para assentar o piso é de R$ ${custoTotal.toFixed(2)}.`;
    } else {
        resultadoElement.innerHTML = "Por favor, insira valores válidos para o comprimento e a largura do cômodo.";
    }
}