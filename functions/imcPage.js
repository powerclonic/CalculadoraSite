function calc() {
    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)

    let imc = (peso / Math.pow(altura,2)).toFixed(2)

    document.getElementById('resultDisplay').value = imc

    if (imc < 17 ) {
        document.getElementById('nivelDisplay').value = "Muito abaixo do peso"
    } else if (imc >= 17 && imc < 18) {
        document.getElementById('nivelDisplay').value = "Abaixo do peso"
    } else if (imc >=18 && imc < 25) {
        document.getElementById('nivelDisplay').value = "Peso normal"
    } else if (imc >= 25 && imc < 30) {
        document.getElementById('nivelDisplay').value = "Acima do peso"
    } else if (imc >=30 && imc < 35) {
        document.getElementById('nivelDisplay').value = "Obseidade I"
    } else if (imc >= 35 && imc < 40) {
        document.getElementById('nivelDisplay').value = "Obesidade II (severa)"
    } else {
        document.getElementById('nivelDisplay').value = "Obesidade III (mórbida)"
    }
} 