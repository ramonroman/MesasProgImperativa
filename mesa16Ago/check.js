const tempoPipoca = 10,
    tempoMacarrao = 8,
    tempoCarne = 15,
    tempoFeijao = 12,
    tempoBrigadeiro = 8,
    pipoca = 'pipoca',
    macarrao = 'macarrao',
    carne = 'carne',
    feijao = 'feijao',
    brigadeiro = 'brigadeiro';

function aquecer(prato, tempo) {

    if (prato == pipoca && tempo < tempoPipoca) {
        console.log('tempo insuficiente')
        console.log('Prato pronto, bom apetite!');
    } else if (prato == pipoca && tempo <= tempoPipoca * 2 - 1) {
        console.log(`Prato concluido com sucesso`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == pipoca && tempo > tempoPipoca * 2 && tempo <= 29) {
        console.log(`Comida queimou`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == pipoca && tempo >= tempoPipoca * 3) {
        console.log('Kabumm')
        console.log('Prato pronto, bom apetite!');

    } else if (prato == macarrao && tempo < tempoMacarrao) {
        console.log('tempo insuficiente')
        console.log('Prato pronto, bom apetite!');
    } else if (prato == macarrao && tempo <= tempoMacarrao * 2 - 1) {
        console.log(`Prato concluido com sucesso`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == macarrao && tempo > tempoMacarrao * 2 && tempo <= 23) {
        console.log(`Comida queimou`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == macarrao && tempo >= tempoMacarrao * 3) {
        console.log('Kabumm');
        console.log('Prato pronto, bom apetite!');

    } else if (prato == carne && tempo < tempoCarne) {
        console.log('tempo insuficiente')
        console.log('Prato pronto, bom apetite!');
    } else if (prato == carne && tempo <= tempoCarne * 2 - 1) {
        console.log(`Prato concluido com sucesso`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == carne && tempo > tempoCarne * 2 && tempo <= 44) {
        console.log(`Comida queimou`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == carne && tempo >= tempoCarne * 3) {
        console.log('Kabumm');
        console.log('Prato pronto, bom apetite!');

    } else if (prato == feijao && tempo < tempoFeijao) {
        console.log('tempo insuficiente')
        console.log('Prato pronto, bom apetite!');
    } else if (prato == feijao && tempo <= tempoFeijao * 2 - 1) {
        console.log(`Prato concluido com sucesso`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == feijao && tempo > tempoFeijao * 2 && tempo <= 35) {
        console.log(`Comida queimou`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == feijao && tempo >= tempoFeijao * 3) {
        console.log('Kabumm');
        console.log('Prato pronto, bom apetite!');

    } else if (prato == brigadeiro && tempo < tempoBrigadeiro) {
        console.log('tempo insuficiente')
        console.log('Prato pronto, bom apetite!');
    } else if (prato == brigadeiro && tempo <= tempoBrigadeiro * 2 - 1) {
        console.log(`Prato concluido com sucesso`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == brigadeiro && tempo > tempoBrigadeiro * 2 && tempo <= 35) {
        console.log(`Comida queimou`);
        console.log('Prato pronto, bom apetite!');
    } else if (prato == brigadeiro && tempo >= tempoBrigadeiro * 3) {
        console.log('Kabumm');
        console.log('Prato pronto, bom apetite!');
    } else
        console.log('Prato inexistente')
}
aquecer(pipoca, 29)