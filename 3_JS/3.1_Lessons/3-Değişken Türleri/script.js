// Ders 3: Değişken Tipleri

// Primitive Types

// String
let firstName = 'Çınar';
console.log(typeof firstName) // string

// Number
let age = 20; 
console.log(typeof age)  // number

let money = 100.5;
console.log(typeof money)  // number

// Boolean
let isActive = false;
console.log( typeof isActive) // boolean

// null
let job = null
console.log(typeof job) // object ! (Bu bir bug dir.)

// undefined
let car;
console.log(typeof car) // undefined !(Bir değer atanmadı.)



// Reference Types: Objects

// Array

let names = ['Ali','Ahmet','Can']
console.log(typeof names) // object

// Object Literals

let address= {
   city: 'Kocaeli',
   country: 'Türkiye'
}

console.log(typeof address) // object

// Functions

var calculateAge = function(){
   return 0;
}

console.log(typeof calculateAge) // function



