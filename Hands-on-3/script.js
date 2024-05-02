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
// Here,  a function named sampleOld is defined. In JavaScript, functions can be used as constructors
// to create objects. This function doesn't take any arguments. Inside the function, it simply logs 
// "Building Old Object" to the console.

sampleOld.prototype.printHello = function (){
    console.log("Hello");
}

// This line adds a method called printHello to the prototype of the sampleOld function. 
// This means that any object created using the sampleOld constructor will have access to this method.

const oldObject = new sampleOld();4

// This line creates a new object named oldObject by calling the sampleOld constructor function 
// using the new keyword. When you create a new object using a constructor function, the function is executed, 
// and the object inherits properties and methods from its prototype.


oldObject.printHello();

// This line calls the printHello method on the oldObject instance. 
// This will log "Hello" to the console because printHello was defined on 
// the prototype of sampleOld.

class sample {
    constructor(){
        console.log("Building Objects");
    }
    printHello(){
       console.log("Hello");
    }
}

// a class named sample is defined using the ES6 class syntax. This class has a constructor method and a printHello method.

const hello = new sample();

// This line creates a new object named hello using the sample class constructor.

hello.printHello();

// Finally, this line calls the printHello method on the hello instance. 
// It also logs "Hello" to the console, just like with the oldObject.

// // Both approaches achieve similar results, but the class-based syntax introduced in ES6 
// offers a more concise and clearer way to define objects and their methods. However, under the hood, 
// it's still using prototypes for inheritance.