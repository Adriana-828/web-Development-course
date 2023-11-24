let num = 10; //global
const pi =3.14;

//
var myname = "Adriana";

{
    let num = 20; //local 
    var myname = "Sousa"; // hoisting

    num = 30;

    console.log(num);
    console.log(myname);
    
}
num = 40;
// pi = 100 // const error

console.log(num);
console.log(pi);
console.log(myname);
