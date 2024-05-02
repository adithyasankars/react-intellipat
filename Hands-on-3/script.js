// if (true){
//     var x = 10;
//     let y = 20;
//     const z = 30;

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// console.log(x);
// console.log(y);
// console.log(z);

// -------------------------------------------------------------------------------------------------

// const greetPersonOld = function(name){
//     return "Hello " + name;
// }

// const greetPerson = name => 'Hello ' + name;

// console.log(greetPersonOld('John'));
// console.log(greetPerson('Jane'));

// ----------------------------------------------------------------------------

function sampleOld (){
    console.log("Building Old Object");
};

sampleOld.prototype.printHello = function (){
    console.log("Hello");
}

const oldObject = new sampleOld();
oldObject.printHello();
class sample {
    constructor(){
        console.log("Building Objects");
    }
    printHello(){
       console.log("Hello");
    }
}

const hello = new sample();
hello.printHello();