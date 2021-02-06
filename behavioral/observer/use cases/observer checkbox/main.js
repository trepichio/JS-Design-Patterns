class ObserverList {
  constructor() {
    this.observerList = []
  }
  add(observer) {
    this.observerList.push(observer)
  }
  removeAt(index) {
    this.observerList.splice(index, 1)
  }
  indexOf(obj, startIndex) {
    const i = startIndex

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i
      }
      i++
    }
    return -1
  }
  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index]
    }
  }
  count() {
    return this.observerList.length
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList()
  }
  addObserver(observer) {
    this.observers.add(observer)
  }
  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0))
  }
  notify(context) {
    for (var i = 0, len = this.observers.count(); i < len; i++) {
      this.observers.get(i).update(context)
    }
  }
}

function Observer() {
  this.update = function () {
    // it should be override
  }
}

// Extend an object with an extension
function extend(obj, extension) {
  for (const key in extension) {
    obj[key] = extension[key];
  }
  // iterate through prototype of a Class
  Object.getOwnPropertyNames(Object.getPrototypeOf(extension)).forEach(key => {
    if (key !== 'constructor') {
      obj[key] = extension[key]
    }
  })
}
// References to our DOM elements

var controlCheckbox = document.querySelector("#mainCheckbox"),
  addBtn = document.querySelector("#addNewObserver"),
  container = document.querySelector("#observersContainer");

// Concrete Subject

// Extend the controlling checkbox with the Subject class
extend(controlCheckbox, new Subject())

// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = () => {
  controlCheckbox.notify(controlCheckbox.checked)
}

addBtn.onclick = addNewObserver

// Concrete Observer

function addNewObserver() {

  // Create a new checkbox to be added
  var check = document.createElement("input")
  check.type = "checkbox"

  // Extend the checkbox with the Observer class
  extend(check, new Observer())

  // Override with custom update behaviour
  check.update = function (value) {
    this.checked = value;
  }
  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver(check);
  // controlCheckbox.subscribe(check.update)

  // Append the item to the container
  container.appendChild(check)

}