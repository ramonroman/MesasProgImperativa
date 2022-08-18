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

    if ((meal == pipoca && time < timePopcorn) || (macarrao && time < timePasta) ||
        (carne && time < timeMeat) || (feijao && time < timeBean) || (brigadeiro && time < timeBrigadeiro)) {

        console.log(`Tempo insuficiente`);


    } else if ((pipoca && time <= timePopcorn * 2) || (macarrao && time <= timePasta * 2) ||
        (carne && time <= timeMeat * 2) || (feijao && time <= timeBean * 2) || (brigadeiro && time <= timeBrigadeiro * 2)) {

        console.log('Prato pronto, bom apetite!');


    } else if ((pipoca && time > timePopcorn * 2 + 1 && time <= 29) || (macarrao && time >= timePasta * 2 && time <= 23) ||
        (carne && time >= timeMeat * 2 && time <= 44) || (feijao && time >= timeBean * 2 && time <= 35) ||
        (macarrao && time >= timePasta * 2 && time <= 24) || (brigadeiro && time >= timeBrigadeiro * 2 && time <= 23)) {

        console.log('A comida queimou');

    } else if ((pipoca && time >= timePopcorn * 3) || (macarrao && time >= timePasta * 3) ||
        (carne && time >= timeMeat * 3) || (feijao && time >= timeBean * 3) || (macarrao && time >= timePasta * 3) ||
        (brigadeiro && time >= timeBrigadeiro * 3)) {

        console.log('Kabuum');

    } else {
        console.log('Prato inexistente')
    }
}

heat(pipoca, 31);