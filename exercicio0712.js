let espectadores = [
    { idade: 18, opiniao: 2 },
    { idade: 19, opiniao: 2 },
    { idade: 20, opiniao: 3 },
    { idade: 21, opiniao: 2 },
    { idade: 41, opiniao: 3 },
    { idade: 23, opiniao: 1 },
    { idade: 24, opiniao: 1 },
    { idade: 25, opiniao: 3 },
    { idade: 26, opiniao: 2 },
    { idade: 17, opiniao: 1 },
    { idade: 28, opiniao: 2 },
    { idade: 29, opiniao: 3 },
    { idade: 30, opiniao: 3 },
    { idade: 40, opiniao: 1 },
    { idade: 32, opiniao: 2 }
 ];
 
 let filtraOtimo = espectadores.filter(function(espectador){
    return espectador.opiniao === 3;
});

console.log(filtraOtimo);

let noOtimo= filtraOtimo.length;

let somaIdade = filtraOtimo.reduce(function(acumulador, item){

    return acumulador + item.idade;
},0);

console.log(somaIdade);

let medOtimo = (somaIdade / noOtimo).toFixed(2);

console.log(medOtimo);

let filtraRegular = espectadores.filter(function(espectador){
    return espectador.opiniao === 1;
});

console.log(filtraRegular);

let noRegular= filtraRegular.length;

console.log(noRegular);

let filtraBom = espectadores.filter(function(espectador){
    return espectador.opiniao === 2;
});

console.log(filtraBom);

let noBom= filtraBom.length;

console.log(noBom);

let porcBom = ((noBom / 15)*100).toFixed(0);

console.log(porcBom+"%");
