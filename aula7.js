!true
!false
!!false
!!true
!1
!!1
!0
!!0
!!"" 
let x = 5 ;
let y = 9;
x < 10 && x!==5
x>9 || x===5
!(x===y)


let x=10;
let y ="a";
console.log(y==="b" || x >= 10)

let x=3;
let y=8;
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y));

let str = "";
let msg = "haha!";
let eBonito = "false";
console.log(!((str || msg) && eBonito));