 //variable Hoisting
function test(){
    console.log(y);

}
test();

var x;
const y='asd';
let z=234;

//Function Hoisting

function test(){
    console.log('helo');
}
var x=function(){
    console.log('hi');
}
test();
x();