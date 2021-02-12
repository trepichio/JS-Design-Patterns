function add(x, y) { return x + y }
function sub(x, y) { return x - y }
function mul(x, y) { return x * y }
function div(x, y) { return x / y }

class Command {
  constructor(execute, undo, value) {
    this.execute = execute
    this.undo = undo
    this.value = value
  }
}

const AddCommand = function (value) {
  return new Command(add, sub, value)
}
const SubCommand = function (value) {
  return new Command(sub, add, value)
}
const MulCommand = function (value) {
  return new Command(mul, div, value)
}
const DivCommand = function (value) {
  return new Command(div, mul, value)
}

const Calculator = function () {
  var current = 0;
  var commands = []

  function action(command) {
    const name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    execute: function (command) {
      current = command.execute(current, command.value)
      commands.push(command)
      log.add(`${action(command)}: ${command.value}`)
    },

    undo: function () {
      const command = commands.pop()
      current = command.undo(current, command.value)
      log.add(`Undo ${action(command)}: ${command.value}`)
    },

    getCurrentValue: function () {
      return current;
    }
  }
}

/**
 * log helper
 */
var log = (() => {
  let log = ''
  return {
    add: function (msg) { log = msg + '\n' },
    show: function () { console.log(log); log = ''}
  }
})();


function run() {
  var calculator = new Calculator()

  // issue commands

  calculator.execute(new AddCommand(100))
  calculator.execute(new SubCommand(50))
  calculator.execute(new MulCommand(6))
  calculator.execute(new DivCommand(2))

  // reverse last two commands

  calculator.undo();
  calculator.undo();

  log.add("\nValue: " + calculator.getCurrentValue())
  log.show()
}

run()