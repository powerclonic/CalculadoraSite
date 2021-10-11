function plus() {
    const n1 = Number(document.getElementById('numero1').value);
    const n2 = Number(document.getElementById('numero2').value);

    let conta = n1 + n2

    document.getElementById('resultDisplay').value = conta
}

function sub() {
    const n1 = Number(document.getElementById('numero1').value);
    const n2 = Number(document.getElementById('numero2').value);

    let conta = n1 - n2

    document.getElementById('resultDisplay').value = conta
}

function mult() {
    const n1 = Number(document.getElementById('numero1').value);
    const n2 = Number(document.getElementById('numero2').value);

    let conta = n1 * n2

    document.getElementById('resultDisplay').value = conta
}

function divi() {
    const n1 = Number(document.getElementById('numero1').value);
    const n2 = Number(document.getElementById('numero2').value);

    let conta = n1 / n2

    document.getElementById('resultDisplay').value = conta
}