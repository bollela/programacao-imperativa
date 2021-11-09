function microondas(comida, tempo){
    if (comida == "pipoca"){

        if (tempo < 10){
            console.log("tempo insuficiente")
        }
        else if (tempo >= 10 && tempo <= 20){
            console.log("tempo ideal")
        }
        else if (tempo > 20 && tempo <= 30){
            console.log("torrou seu bobo")
        }
        else if (tempo > 30){
            console.log("explodiu")
        }
    }
    else if(comida == "macarrão"){

        if (tempo < 8){
            console.log("tempo insuficiente")
        }
        else if (tempo >= 8 && tempo <= 16){
            console.log("tempo ideal")
        }
        else if (tempo > 16 && tempo <= 24){
            console.log("torrou seu bobo")
        }
        else if (tempo > 24){
            console.log("explodiu")
        }
    }
    else if (comida == "Carne"){

        if (tempo < 15){
            console.log("tempo insuficiente")
        }
        else if (tempo >= 15 && tempo <= 30){
            console.log("tempo ideal")
        }
        else if (tempo > 30 && tempo <= 45){
            console.log("torrou seu bobo")
        }
        else if (tempo > 45){
            console.log("explodiu")
        }
    }
    else if (comida == "feijão"){

        if (tempo < 12){
            console.log("tempo insuficiente")
        }
        else if (tempo >= 12 && tempo <= 24){
            console.log("tempo ideal")
        }
        else if (tempo > 24 && tempo <= 36){
            console.log("torrou seu bobo")
        }
        else if (tempo > 36){
            console.log("explodiu")
        }
    }
    else if (comida == "brigadeiro"){

        if (tempo < 8){
            console.log("tempo insuficiente")
        }
        else if (tempo >= 8 && tempo <= 16){
            console.log("tempo ideal")
        }
        else if (tempo > 16 && tempo <= 24){
            console.log("torrou seu bobo")
        }
        else if (tempo > 24){
            console.log("explodiu")
        }
    }
    else {
        console.log("prato inexistente")
    }
}

microondas ("Carne",15 )



