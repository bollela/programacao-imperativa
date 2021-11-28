const contas = require('./aula/aula');
let contasBancarias = [];

function Conta(numero, tipo, saldo, titular){
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
};

function addConta(array, array2){
    for(i = 0; i<array.length; i++){
        array2.push(new Conta(array[i].numero, array[i].tipo, array[i].saldo, array[i].titular))
    }
    return array2
}

addConta(contas, contasBancarias)

const banco = {
    clientes: contasBancarias,
    consultarCliente: function consultarCliente(titular){
        for(i = 0; i<this.clientes.length; i++){
            if(titular == this.clientes[i].titular){
                return 'Cliente', this.clientes[i].titular
            }else{
                return 'Cliente inexistente'
            }
        }
    }
}

console.log(banco.consultarCliente('Moises'))