//var to use store a data temporarily
let name='Mithun';
console.log(name);

//constant
  const interestRate=0.3;
  // interestRate=1;  /this will show error. if we use let insted of const means it shows ans 1
  console.log(interestRate);

//if we dont want to reassign use const,is we want to reassign use variable(let)


//object
let person={
    name:'Mithun',
    age:20
};

person.name='joe';

console.log(person.name);

//array
let selectedColors=['red','blue'];
 selectedColors[2]=1;
console.log(selectedColors);

//fuction

// parameter(name) is what we have here at the time of declaration. it can have multiple parameter
// argument(mithun) is actual value that supply for the parameter.


//performing a task
function me(name)
{
    console.log('Hello ' + name);
}

me('mithun');

//calculate the value
function square(number){
    return number*number;
}
console.log(square(2));