let numeros = [];

function adicionarNumero() {
    const input = document.getElementById("numberInput");
    const numero = parseInt(input.value);
    if (!isNaN(numero)) {
        numeros.push(numero);
        input.value = "";
        exibirNumeros();
    } else {
        alert("Por favor, insira um número válido.");
    }
}

function exibirNumeros() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Números Inseridos:</h2>";
    outputDiv.innerHTML += "<p>" + numeros.join(", ") + "</p>";

    if (numeros.length > 0) {
        const maximo = Math.max(...numeros);
        const minimo = Math.min(...numeros);
        outputDiv.innerHTML += "<h2>Maior Valor:</h2>";
        outputDiv.innerHTML += "<p>" + maximo + "</p>";
        outputDiv.innerHTML += "<h2>Menor Valor:</h2>";
        outputDiv.innerHTML += "<p>" + minimo + "</p>";
    }
}