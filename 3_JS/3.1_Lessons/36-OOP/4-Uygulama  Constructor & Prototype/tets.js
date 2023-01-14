let Employee = function (name, salary) {
  this.name = name;
  this.salary = salary;
  this.CalculateTotalSalary = function () {
    let date = new Date();
    return date.getMonth() * salary;
  }

  this.totalSalary = CalculateTotalSalary();

  this.CalculateTax = function () {
    if (this.totalSalary < 20000) {
      return this.totalSalary * 0.2;
    } 
    else if (this.totalSalary < 30000) {
      return this.totalSalary * 0.25;
    } 
    else if(this.totalSalary > 30000){
      return this.totalSalary * 0.27;
    }
  }
}

var person1 = new Employee("Ebubekir" , 3500);
console.log(person1.name)
console.log(person1.salary)
console.log(person1.CalculateTotalSalary())
console.log(person1.totalSalary)
console.log(person1.CalculateTax())

