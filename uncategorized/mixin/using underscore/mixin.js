var _ = require("underscore")

var myMixins = {
  moveUp: function () {
    console.log("Move up");
  },

  moveDown: function () {
    console.log("move down");
  },

  stop: function () {
    console.log("stop! now!");
  }
}

/**
 * extend the prototype of existing constructor functions to include this behavior using helper such as the Underscore.js _.extend() method
 */

//  A skeleton carAnimator constructor
function CarAnimator() {
  this.moveLeft = function () {
    console.log("move left");
  }
}

// A skeleton personAnimator constructor
function PersonAnimator() {
  this.moveRandomly = function () {
    /** .. */
  }
}

// Extend both constructors with our Mixin

_.extend(CarAnimator.prototype, myMixins)
_.extend(PersonAnimator.prototype, myMixins)

// Create a new instance of carAnimator
var myAnimator = new CarAnimator()
myAnimator.moveLeft()
myAnimator.moveDown()
myAnimator.stop()

// Outputs:
// move left
// move down
// stop! now!