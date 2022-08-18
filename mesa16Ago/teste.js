const timePopcorn = 10,
    timePasta = 8,
    timeMeat = 15,
    timeBean = 12,
    timeBrigadeiro = 8,
    pipoca = 'pipoca',
    macarrao = 'macarrao',
    carne = 'carne',
    feijao = 'feijao',
    brigadeiro = 'brigadeiro';

function heat(meal, time) {
    value = time
    switch (meal, time) {
        case (pipoca && time == 10):
            console.log('prato pronto');
            console.log('Prato pronto, bom apetite!');
            break;
        case pipoca, 20:

            console.log('comida queimou');
            console.log('Prato pronto, bom apetite!');
            break;
        case pipoca:
        case 30:
            console.log('Kabumm');
            console.log('Prato pronto, bom apetite!');
            break;
    }
}

heat(pipoca, 10)
    /////////////////////