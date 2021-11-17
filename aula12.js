const alice = [23,82,46]
const bob = [45,8,32]

function encontrarGanhador (array1, array2){
    let A = 0
    let B = 0
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > array2[i]) {
            A++
        }
        else if (array2[i] > array1[i]){
            B++
        }
        else {
            console.log("empate")
        }
    }
    console.log("Alice = " + A);
    console.log("Bob = " + B);
}
encontrarGanhador(alice,bob);