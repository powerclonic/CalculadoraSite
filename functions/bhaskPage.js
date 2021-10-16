function calc() {
    const A = Number(document.getElementById('coeA').value)
    const B = Number(document.getElementById('coeB').value)
    const C = Number(document.getElementById('coeC').value)

    let delta = Number(Math.pow(B, 2) - 4 * A * C)

    if (delta <= 0) {
        document.getElementById('maisDisplay').value = 'Não existem raízes reais'
        document.getElementById('subDisplay').value = 'Não existem raízes reais'
    } else {
        let num1 = (-B + Math.sqrt(delta, 2)) / (2 * A)
        let num2 = (-B - Math.sqrt(delta, 2)) / (2 * A)

        console.log(delta)

        document.getElementById('maisDisplay').value = num1.toFixed(2)
        document.getElementById('subDisplay').value = num2.toFixed(2)
    }
}