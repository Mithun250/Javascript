

//foreach
let num=[30,12,34,21,54];

num.forEach(n=>{
    console.log(n);

});

//set
let nums=new Set("bookkeeper");
console.log(nums);


let number=new Set();
number.add(3);
number.add(3);
number.add("Naveen");
number.add("gopi");

number.forEach(values=>
    {
        console.log(values);
    });


//filter

let n=[43,56,78,90,91]
console.log(n.filter(n=>n%2==0));