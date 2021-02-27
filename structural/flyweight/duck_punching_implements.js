// Simulate pure virtual inheritance/"implement" keyword for JS (somehing like in Java)
Function.prototype.implementsFor = function (parentClassOrObject) {
  if (parentClassOrObject.constructor === Function) {
    // Normal Inheritance
    this.prototype = new parentClassOrObject()
    this.prototype.constructor = this
    this.prototype.parent = parentClassOrObject.prototype
  }
  else
  {
    // Pure Virtual Inheritance
    this.prototype = parentClassOrObject
    this.prototype.constructor = this
    this.prototype.parent = parentClassOrObject
  }

  return this
}