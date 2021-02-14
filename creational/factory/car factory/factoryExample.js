const {Car, Truck} = require('./types.js');

// Define a skeleton vehicle factory
function VehicleFactory() {

  // Define the prototypes and utilities for this factory

  // Our default vehicleClass is Car
  VehicleFactory.prototype.vehicleClass = Car

  // Our Factory method for creating new Vehicle instances
  VehicleFactory.prototype.createVehicle = function (options) {

    switch (options.vehicleType) {
      case "car":
        this.vehicleClass = Car
        break;

      case "truck":
        this.vehicleClass = Truck
        break;
    }

    return new this.vehicleClass(options)
  }

}

// Create an instance of our factory that makes cars
  var carFactory = new VehicleFactory()
  var car = carFactory.createVehicle({
    vehicleType: "car",
    color: "yellow",
    doors: 6
  })

  // Test to confirm our car was created using the VehicleClass/prototype

  // Outputs: true
  console.log(car instanceof Car);

  // Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
  console.log(car);

  /**
   * Approach #1: Modify a VehicleFactory instance to use the Truck class
   */

  var movingTruck = carFactory.createVehicle({
    vehicleType: "truck",
    state: "like new",
    color: "red",
    wheelSize: "small"
  })

  // Test to confirm our truck was created with the vehicleClass/prototypw

  // Outputs: true
  console.log(movingTruck instanceof Truck );

  // Outputs: Truck object of color "red", a "like new" state
  // and a "small" wheelSize
  console.log(movingTruck);

/**
 * Approach #2: Subclass VehicleFactory to created a factory class that builds Trucks
 */

 function TruckFactory() {}
 TruckFactory.prototype = new VehicleFactory()
 TruckFactory.prototype.vehicleClass = Truck;

 var truckFactory = new TruckFactory()
 var myBigTruck = truckFactory.createVehicle({
   state: "omg... so bad.",
   color: "pink",
   wheelSize: "so big"
 })

//  Confirms that myBigTruck was created with the prototype Truck
// Outputs: true
console.log( myBigTruck instanceof Truck );

// Outputs: Truck object with the color "pink", wheelSize "so big"
// and state "omg... so bad"
console.log( myBigTruck );