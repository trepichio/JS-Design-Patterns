var testModule = (() => {
  var counter = 0

  return {
    incrementCounter: function () {
      return counter++
    },
    resetCounter: function () {
      console.log(`counter value prior to reset: ${counter}`)
      counter = 0
    },
    showCounter: function () {
      console.log(counter);
    }
  }
})();

// Usage:

// Increment our counter
testModule.incrementCounter()
testModule.incrementCounter()
testModule.incrementCounter()

// show counter
testModule.showCounter()

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter()