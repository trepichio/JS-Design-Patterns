(() => {
  const carManager = {

    // request information
    requestInfo: function (model, id) {
      return `The information for ${model} with ID ${id} is foobar`
    },

    // purchase the car
    buyVehicle: function (model, id) {
      return `You have successfully purchased Item ${id}, a ${model}`
    },

    // arrange a viewing
    arrangeViewing: function (model, id) {
      return `You have successfully booked a viewing of ${model} (${id})`
    }
  }

  carManager.execute = function (name) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1))
  }

  let log = ''
  log += carManager.execute("arrangeViewing", "Ferrari", "21452") + '\n'
  log += carManager.execute("requestInfo", "Ford Escort", "32234") + '\n'
  log += carManager.execute("requestInfo", "Ford Mondeo", "12562") + '\n'
  log += carManager.execute("buyVehicle", "Ford Escort", "43324") + '\n'

  console.log(log);

})();