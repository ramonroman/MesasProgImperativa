function add(n1, n2) {
    let result = n1 + n2;
    return result;
}
console.log(`Teste de operação matemática do tipo: Soma ${add(1, 1)}`);
//console.log(add(1, 1));

function subtract(n1, n2) {
    let result = n1 - n2;
    return result;
}
console.log(`Teste de operação matemática do tipo: Subtração ${subtract(1, 1)}`);
//console.log(subtract(1, 1));

function multiply(n1, n2) {
    let result = n1 * n2;
    return result;
}
console.log(`Teste de operação matemática do tipo: Multiplicação ${multiply(5, 5)}`);
//console.log(multiply(5, 5));

function dividedBy(n1, n2) {
    let result = n1 / n2;
    return result;
}
console.log(`Teste de operação matemática do tipo: Divisão ${dividedBy(10, 2)}`);
console.log(`Teste de operação matemática do tipo: Divisão por 0 ${dividedBy(10, 0)}`);
//console.log(dividedBy(10, 2));

function squareNumber(n) {
    let result = multiply(n, 1) * multiply(n, 1);
    return result;
}
console.log(squareNumber(2));

function average(n1, n2, n3) {
    let result = (n1 + n2 + n3) / 3
    return result
}

console.log(`a média é: ${average(5, 10, 10)}`)

function percent(n1, n2) {
    let result = (n1 * n2) / 100
    return result;

}
console.log(`A porcentagem é: ${percent(100, 10)}`)