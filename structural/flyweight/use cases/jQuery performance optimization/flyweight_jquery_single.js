// Unfortunately, many of us have become used to the idea of wrapping 'this' in
// $() or jQuery(), which means that a new instance of jQuery is unnecessarily
// constructed every time, rather than simply doing this:

$("div").on("click", function () {
  console.log(`You clicked: ${$(this).attr("id")}`);
});


// we should avoid using the DOM element to create a jQuery object (with the
// overhead that comes with it) and just use the DOM element itself like this:

$("div").on("click", function () {
  console.log(`You clicked: ${this.id}`);
})

// Now with respect to redutant wrapping, where possible with jQuery's methods,
// it's better to use jQuery.methodName (e.g jQuery.text) as opposed to
// jQuery.fn.methodName (e.g jQuery.fn.text) where methodName represents a
// utility such as each() or text. This avoid the need to call a further level
// of abstraction or construct a new jQuery object each time our function is
// called as jQuery.methodName is what the library itself uses at a lower-level
// to power jQuery.fn.methodName.
// Because however not all of jQuery's methods have corresponding single-node
// functions, Padolsey devised the idea of a jQuery.single utility.

jQuery.single = ((o) => {
  var collection = jQuery([1])
  return function (element) {
    // Give collection the element
    collection[0] = element

    // Return the collection
    return collection
  }
})();


// An example of this in action with chaining is:

$("div").on("click", function () {
  var html = jQuery.single(this).next().html()
  console.log(html);
})
