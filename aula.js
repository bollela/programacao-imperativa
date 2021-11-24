let carro = {
    marca :"ford",
    modelo : "k",
    andar : function() {
        return "carro "+this.modelo+ " andando";
    }
};

console.log( carro.andar());