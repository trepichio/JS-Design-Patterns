class TrafficLight {
  constructor() {
    this.count = 0
    this.currentState = new Red(this)
  }

  change(state) {
    // limits number of changes so it won't run indefinetly
    if (this.count++ > 10) return;
    this.currentState = state;
    this.currentState.go();
  }

  start() {
    this.currentState.go();
  }
}

class Red {
  constructor(light) {
    this.light = light
  }

  go() {
    log.add("Red --> for 1 minute")
    this.light.change(new Green(this.light))
  }
}

class Yellow {
  constructor(light) {
    this.light = light
  }

  go() {
    log.add("Yellow --> for 10 seconds")
    this.light.change(new Red(this.light))
  }
}

class Green {
  constructor(light) {
    this.light = light
  }

  go() {
    log.add("Green --> for 1 minute")
    this.light.change(new Yellow(this.light))
  }
}

const log = (() => {
  let log = ''
  return {
    add(message) {
      log += `${message}\n`
    },
    show() {
      console.log(log);
    }
  }
})();

function run() {
  const light = new TrafficLight()
  light.start()

  log.show()
}

run()