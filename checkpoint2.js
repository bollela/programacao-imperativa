function nomeCompleto(nome, sobrenome) {
    return nome+' '+sobrenome
}

console.log( nomeCompleto("Marcos", "Santana") );

function bomDia(nome, sobrenome, callback) {
    return 'Olá '+callback(nome, sobrenome)
}

console.log( bomDia("Johnny", "Pecego", nomeCompleto) )
