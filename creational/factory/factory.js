class Developer {
  constructor(name) {
    this.name = name
    this.type = "Developer"
  }
}

class Tester {
  constructor(name) {
    this.name = name
    this.type = "Tester"
  }
}

/**
 * Employee Factory
 * @method create
 */
class EmployeeFactory {
  constructor() {
    const employee = {
      1: (name) => new Developer(name),
      2: (name) => new Tester(name)
    }
    /**
     * Creates different types of employee object
     * @var name name of employee
     * @var type a number that represents job title of employee
     */
    this.create = (name, type) => employee[type](name)
  }
}

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}` );
}


const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("John", 1))
employees.push(employeeFactory.create("Paul", 2))
employees.push(employeeFactory.create("Mike", 1))
employees.push(employeeFactory.create("Rick", 2))
employees.push(employeeFactory.create("Tom", 1))

employees.forEach(emp => {
  say.call(emp)
})