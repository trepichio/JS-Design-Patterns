/**
 * These correspond to the following definitions in our implementation:
 *
 * - CoffeeOrder: Flyweight
 * - CoffeeFlavor: Concrete Flyweight
 * - CoffeeOrderContext: Helper
 * - CoffeeFlavorFactory: Flyweight Factory
 * - testFlyweight: Utilization of our Flyweights
 */

require('./duck_punching_implements.js');

// Flyweight object
var CoffeeOrder = {

  // Interfaces
  serveCoffee: function (context) {  },
  getFlavor  : function () {  }
}

// ConcreteFlyweight object that creates ConcreteFlyweight
// Implements CoffeeOrder
function CoffeeFlavor(newFlavor) {
  var flavor = newFlavor

  // If an interface has been defined for a feature
  // implement the feature
  if (typeof this.getFlavor === "function") {
    this.getFlavor = function () {
      return flavor
    }
  }

  if (typeof this.serveCoffee === "function") {
    this.serveCoffee =  function (context) {
      console.log(`Serving Coffee flavor ${flavor} to the table number ${context.getTable()}`);
    }
  }
}

// Implement interface for CoffeeOrder
CoffeeFlavor.implementsFor(CoffeeOrder)

// Handle table numbers for a coffee order
function CoffeeOrderContext(tableNumber) {
  return {
    getTable: function () {
      return tableNumber
    }
  }
}

function CoffeeFlavorFactory() {
  var flavors = {},
      length = 0;

  return {
    getCoffeeFlavor: function (flavorName) {
      var flavor = flavors[flavorName]

      if (typeof flavor === "undefined") {
        flavor = new CoffeeFlavor(flavorName)
        flavors[flavorName] = flavor
        length++
      }

      return flavor
    },

    getTotalCoffeeFlavorsMade: function () {
      return length
    }
  }
}

// Sample usage:
testFlyweight()

function testFlyweight() {
  var flavors = [],

  // The tables for the orders
  tables = [],

  // Number of orders made
  ordersMade = 0,

  // The CoffeeFlavorFactory instance
  flavorFactory = new CoffeeFlavorFactory()

  function takeOrders(flavorIn, table) {
    flavors.push(flavorFactory.getCoffeeFlavor(flavorIn))
    tables.push(new CoffeeOrderContext(table))
    ordersMade++
  }

  takeOrders("Cappuccino", 2)
  takeOrders("Cappuccino", 2)
  takeOrders("Frappe", 1)
  takeOrders("Frappe", 1)
  takeOrders("XPresso", 1)
  takeOrders("Frappe", 762)
  takeOrders("Cappuccino", 77)
  takeOrders("Cappuccino", 77)
  takeOrders("Frappe", 3)
  takeOrders("Xpresso", 3)
  takeOrders("Cappuccino", 3)
  takeOrders("XPresso", 86)
  takeOrders("Frappe", 425)
  takeOrders("Cappuccino", 158)
  takeOrders("XPresso", 158)

  for (let i = 0; i < ordersMade; i++) {
    flavors[i].serveCoffee(tables[i]);
  }
  console.log("===========================================");
  console.log(`Total CoffeeFlavor objects made: ${flavorFactory.getTotalCoffeeFlavorsMade()}`);
}