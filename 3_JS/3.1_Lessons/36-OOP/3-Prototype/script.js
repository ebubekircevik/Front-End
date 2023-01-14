// Prototype
// uretilen her yeni nesne de kullanılmayacak özellikler ram de fazladan yer tutmaması için prototype kullanılır. Prototype, referans adresini tutar bu sayede kullanılmayan ozellikler ram de fazladan yer tutmaz, referans adresini tutar.

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;    
}

Person.prototype.calculateAge = function(){
    return 2018 - this.yearOfBirth;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.lastName='Turan';

let emel = new Person('emel',1989,'teacher');
let yigit = new Person('yiğit',2010,'student');

console.log(emel.calculateAge());
console.log(emel);
console.log(emel.getName());
console.log('***************')
console.log(yigit);
console.log(yigit.calculateAge());
console.log(yigit.getName());

console.log(emel.hasOwnProperty('lastName'));

console.log(emel.lastName);
console.log(yigit.lastName);
