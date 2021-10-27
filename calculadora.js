

function adicionar (x,y) {
    return x + y;
}

function subtracao (x,y) {
    return x - y;
}

function multiplicacao (x,y){
    return x*y;
}

function divisao (x,y){
    return x/y;
}

console.log("adição",adicionar(3,5));
console.log("subtração",subtracao(3,5));
console.log("multiplicação",multiplicacao(3,5));
console.log("divisão",divisao(3,5));

console.log ("-------------- Teste de Operações / Calculadora --------------")

function quadradoDoNumero (a) {
    return multiplicacao(a, a);
}

console.log(quadradoDoNumero(2));

function mediaDeTres(a,b,c){
    const soma1 = adicionar(a,b);
    const soma2 = adicionar(soma1,c);
    return divisao (soma2,3);
}

console.log('média', mediaDeTres(3, 3, 3));

function calculaPorcentagem(n, p){
    const multiplicacao = multiplicacao (n, p);
    const porcentagem = dividir(multiplicacao, 100)
    return porcentagem
}

function geradorDePorcentagem(a,b){
    const multiplicacao = multiplicacao (a,100);
}




