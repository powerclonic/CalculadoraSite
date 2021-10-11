function calc() {
    const primeiraNota = Number(document.getElementById('nota1').value)
    const segundaNota = Number(document.getElementById('nota2').value)
    const terceiraNota = Number(document.getElementById('nota3').value)

    let media = Number((primeiraNota+segundaNota+terceiraNota)/3)
    document.getElementById('resultDisplay').value = media.toFixed(2)
}