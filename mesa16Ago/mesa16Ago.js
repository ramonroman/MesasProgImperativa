function podeSubir(height, acompanhada) {
    height,
    acompanhada

    if (height >= 1.40 && height < 2) {
        return true
    } else if (height == 1.20 && height <= 1.40 && acompanhada == true) {
        return true
    } else {
        height > 1.20
        return false
    }
}

console.log(podeSubir(1.9, false))


function podeSubirComTexto(height, acompanhada) {
    height,
    acompanhada

    if (height >= 1.40 && height < 2) {
        console.log('Acesso autorizado');

    } else if (height == 1.20 && height <= 1.40 && acompanhada == true) {
        console.log('Acesso autorizado somente com acompanhante');

    } else {
        height > 1.20
        console.log('Acesso negado!');
    }
}

podeSubirComTexto(1.20, true)