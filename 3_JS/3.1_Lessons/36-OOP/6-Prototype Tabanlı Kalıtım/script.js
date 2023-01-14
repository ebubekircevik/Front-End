// Prototypal Inheritance

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth= yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2018 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);
    this.subject = subject;
}

// Inherit the Person prototype methods( Yukaridaki calculateAge() fonksyonunu teacher objesinden turetilen bir nesnenin prototype kısmında gorebilmek inherit edilmesi gerekiyor)
Teacher.prototype = Object.create(Person.prototype);

// set Teacher constructor (Bu atama yapılmadığı durumda teacher constructor ı sadece person constructor ını gorur Teacher constructor ını değil)
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function(){
    return 'hello my name is '+this.name;
}

let emel = new Teacher('emel',1989,'teacher','math');

console.log(emel);
console.log(emel.calculateAge());
