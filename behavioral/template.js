const datastore = {
  process: function () {
    this.connect()
    this.select()
    this.disconnect()
    return true
  }
}

function inherit(proto) {
  const F = function () { }
  F.prototype = proto
  return new F()
}
// log helper
const log = (() => {
  let log = ''
  return {
    add(message) {
      log += `${message}\n`
    },
    show() {
      console.log(log);
      log = ''
    }
  }
})();

function run() {
  const mySql = inherit(datastore)

  // implement  template steps

  mySql.connect = function () {
    log.add("MySQL: connect step")
  }

  mySql.select = function () {
    log.add("MySQL: select step")
  }

  mySql.disconnect = function () {
    log.add("MySQL: disconnect step")
  }

  mySql.process()

  log.show()
}

run()