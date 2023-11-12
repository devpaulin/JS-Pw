function calcularGastoCombustivel() {
    const quilometragem = parseFloat(document.getElementById("quilometragem").value);
    const valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value);
    const resultadoElement = document.getElementById("resultado");

    if (!isNaN(quilometragem) && !isNaN(valorCombustivel)) {
        const consumoPorLitro = 8; // O veículo percorre 8 km por litro.
        const litrosNecessarios = quilometragem / consumoPorLitro;
        const gastoTotal = litrosNecessarios * valorCombustivel;
        resultadoElement.innerHTML = `O gasto total é de R$ ${gastoTotal.toFixed(2)}.`;
    } else {
        resultadoElement.innerHTML = "Por favor, insira valores válidos para quilometragem e valor do combustível.";
    }
}