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

const greetPersonOld = function(name){
    return "Hello " + name;
}

const greetPerson = name => 'Hello ' + name;

console.log(greetPersonOld('John'));
console.log(greetPerson('Jane'));