function calcularPesoIdeal() {
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.getElementById('sexo').value;
    let pesoIdeal;

    if (sexo === 'masculino') {
      pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === 'feminino') {
      pesoIdeal = (62.1 * altura) - 44.7;
    }

    const resultadoElement = document.getElementById('result');
    resultadoElement.innerHTML = `
      <h2>Peso Ideal:</h2>
      <p>Seu peso ideal é aproximadamente <br> ${pesoIdeal.toFixed(2)} kg.</p></br>
    `;
  }