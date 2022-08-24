//1 retorna undefined pois busca o inedx 5 que não existe.
//2 retorna o array de indice 1 e então o registro de indece 0 dentro deste array;
//3 retorna uma string qualquer pois acessa o array e busca seu ultimo index, o que leva à variavel str;

let array = [0, 1, 3, 4, 5, 6]
let arrayJoin = ['o', 'l', 'a']
let sum = 0;
let conca = ''
let aux = 0;

function inverterArray() {
    for (tamanhoArray = array.length; tamanhoArray >= 0; tamanhoArray--) {
        console.log(array[tamanhoArray]);
    }
}
inverterArray();

function inverter() {
    let novoArray = []
    for (tamanhoArray = array.length; tamanhoArray >= 0; novoArray = tamanhoArray--) {
        console.log(novoArray);
    }
}

inverter();

function somarArrays() {

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum)
}
somarArrays();

function join() {
    for (let i = 0; i < arrayJoin.length; i++) {
        conca += arrayJoin[i]
    }
    console.log(conca)
}
join();

let filmesSeries = ['Star Wars', 'Matrix', 'mr.Robot', 'O preço do amanhã'];

function maiuscula(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase()

    }
    console.log(array)
}

maiuscula(filmesSeries);

let filmesAnimacao = ['Toy Story', 'Procurando Nemo', 'Kung-fu Panda', 'Wally', 'Fortnite'];

function addArray(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
    aux = [array1.pop()]
    console.log(array1)
    console.log(aux)
}
addArray(filmesSeries, filmesAnimacao)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4],
    euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compareScores(scores1, scores2) {
    for (let i = 0; i < scores1.length && i < scores2.length; i++) {
        if (scores1[i] == scores2[i]) {
            console.log(scores1[i] + ' é igual a ' + scores2[i])
        } else {
            console.log(scores1[i] + ' é diferente de ' + scores2[i])
        }
    }
}

compareScores(asiaScores, euroScores)