//Página 1 Mesa 

console.log(Math.random())

function cumprimentarA(nome) {
    const mensagem = 'Olá, seja bem vindo/a!';
    console.log(mensagem + nome);
}

cumprimentarA('Ramon');
cumprimentarA('Geovana');

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5;
}
console.log(multiplicarPorDoisESomarCinco(1));
console.log(multiplicarPorDoisESomarCinco(5));

//Página 2 mesa
//1)
function polCent(pol) {
    return pol * 2.54;
}

console.log(polCent(3));

//2)
function link(dominio) {
    return "https://" + dominio + ".com.br";
}

console.log(link('google'));

//3)
function adcionaExclamacao(frase) {
    return frase + '!';
}

console.log(adcionaExclamacao('olá mundo'));

//4
function dogYears(humanAge) {
    return humanAge * 7;
}

console.log(dogYears(5));

//5)
function mediaSalario(salary) {
    return salary / 160;
}

console.log(mediaSalario(3000));

//6)
function imc(peso, altura) {
    return (peso) / (altura * altura);
}

console.log(imc(83, 1.80));

//7)
function caixaAlta(text) {
    return text.toUpperCase();
}

console.log(caixaAlta('olá'));

//8)
function tipoDado(dado) {
    return typeof dado;
}

console.log(tipoDado(20));

//9)
function calcRaio(raio) {
    return 2 * 3.14 * raio
}

console.log(calcRaio(5))