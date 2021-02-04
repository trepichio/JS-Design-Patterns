class Process {
  constructor(state) {
    this.state = state;
  }
}

const Singleton = (() => {
  class ProcessManager {
    constructor() {
      this.numProcess = 0;
    }
  }

  let pManager

  function createProcessManager() {
    pManager = new ProcessManager()
    return pManager
  }

  return {
    getProcessManager() {
      return pManager ? pManager : (pManager = createProcessManager());
    }
  }
})();

const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

console.log(processManager === processManager2);

// =================================================

var mySingleton = (() => {

  // Instance stores a reference to the Singleton
  var instance

  function init() {
    // Singleton

    // Private methods and variables
    function privateMethod( ) {
      console.log("I am private");
    }

    var privateVariable = "I am also private"

    var privateRandomNumber = Math.random()

    return {
      // Public methods and variables
      publicMethod: function  ( ) {
        console.log("The public can see me!");
      },

      publicProperty: "I am also public",

      getRandomNumber: function  ( ) {
        return privateRandomNumber
      }
    }
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function  ( ) {
      if (!instance) {
        instance = init()

      }
      return instance
    }
  }
})();

const mysingleton = mySingleton.getInstance()
const otherInstance = mySingleton.getInstance()
console.log(mysingleton === otherInstance)
console.log(mysingleton.getRandomNumber());
mysingleton.publicMethod()
console.log(otherInstance.getRandomNumber());
