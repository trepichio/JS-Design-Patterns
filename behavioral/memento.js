class Person {
  constructor(name,street,city,state) {
    this.name = name
    this.street = street
    this.city = city
    this.state = state
  }

  hydrate() {
    const memento = JSON.stringify(this)
    return memento
  }

  dehydrate(memento) {
    const m = JSON.parse(memento)
    this.name   = m.name
    this.street = m.street
    this.city   = m.city
    this.state  = m.state
  }
}

class CareTaker {
  constructor() {
    this.mementos = {}
  }

  add(key, memento) {
    this.mementos[key] = memento
  }

  get(key) {
    return this.mementos[key]
  }
}

// log helper
const log = (() => {
  let log = ''
  return {
    add: (msg) => {
      log += msg + '\n'
    },
    show: () => {
      console.log(log);
    }
  }
})();

function run() {
  const mike = new Person("Mike Foley", "1112 Main", "Daltas", "TX")
  const john = new Person("John Wang", "72th Street", "New York", "NY")
  const careTaker = new CareTaker()

  // save state
  careTaker.add(1, mike.hydrate())
  careTaker.add(2, john.hydrate())

  // mess up their names
  mike.name = "Joker"
  john.name = "Batman"

  // restore original state

  mike.dehydrate(careTaker.get(1))
  john.dehydrate(careTaker.get(2))

  log.add(mike.name)
  log.add(john.name)

  log.show()
}

run()