class Employee {
  constructor(name, salary, vacation) {
    this.name = name
    this.salary = salary
    this.vacation = vacation
  }

  getName() {
    return this.name
  }

  getSalary() {
    return this.salary
  }

  setSalary(value) {
    this.salary = value
  }

  getVacation() {
    return this.vacation
  }

  setVacation(value) {
    this.vacation = value
  }

  accept(visitorFunction) {
    visitorFunction(this)
  }
}

const log = (() => {
  let log = ''
  return {
    add(message) {
      log += message + '\n'
    },
    show() {
      console.log(log);
      log = ''
    }
  }
})();

// ===================================

const john = new Employee('john', 15000, 30)
const employees = [
  new Employee("John", 10000, 15),
  new Employee("Mary", 20000, 21),
  new Employee("Boss", 250000, 30)
]

console.log('salary :>> ', john.getSalary());

function ExtraSalary(employee) {
  employee.setSalary(employee.getSalary() * 1.1)
}

function ExtraVacation(employee) {
  employee.setVacation(employee.getVacation() + 2)
}

john.accept(ExtraSalary)
john.accept(ExtraVacation)
console.log(john.getSalary());
console.log(john.getVacation());


for (var i = 0, len = employees.length; i < len; i++) {
  const emp = employees[i]

  emp.accept(ExtraSalary)
  emp.accept(ExtraVacation)
  log.add(`${emp.getName()}: R$${emp.getSalary()} and ${emp.getVacation()} vacation days`)
}

log.show()