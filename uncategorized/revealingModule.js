var myReavealingModule = (() => {
  var privateVar = "John Trepichio",
      publicVar = "Hey There!"

  function privateFunction() {
    console.log(`Name: ${privateVar}`);
  }

  function publicSetName( strName ) {
    privateVar = strName
  }

  function publicGetName() {
    privateFunction()
  }

  // Reveal public pointers to
  // private functions and properties
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  }
})();

myReavealingModule.getName()
myReavealingModule.setName("Jerry Mush")
console.log(myReavealingModule.greeting)
myReavealingModule.getName()