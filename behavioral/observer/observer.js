class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  unsubscribe(fnToRemove) {
    this.observers = this.observers.filter(fn => fn != fnToRemove);
  }
  notify(o, thisObj) {
    const scope = thisObj || window;
    this.observers.forEach(fn => {
      fn.call(scope, o);
    });
  }
}

const log = (() => {
  let log = ''
  return {
    add: (message) => { log += message + '\n' },
    show: () => console.log(log)
  }
})()

function run() {

  const subject = new Subject()

  function Observer1() {
    log.add("Observer 1 notified!");
  }

  function Observer2() {
    log.add("Observer 2 notified!");
  }

  const clickHandler = (item) => {
    log.add(`fired: ${item}` );
  }

  subject.subscribe(Observer1)
  subject.subscribe(Observer2)

  subject.notify()

  subject.unsubscribe(Observer2)
  subject.notify()

  subject.subscribe(clickHandler)
  subject.notify('event #1')
  subject.unsubscribe(clickHandler)
  subject.notify('event #2')

  log.show();

}

run()