const pubsub = require('./pubSub_minimalist.js');
const INBOX_NEWMESSAGE = Symbol("inbox/newMessage")

// Another simple message handler

// A simple message logger that logs any topics and data received through
// subscriber
var messageLogger =  function (topics, data) {
  console.log(`Logging: ${topics.toString()}: ${data}`);
}

// Subscribers listen for topics they have subscribed to and
// invoke a callback function (e.g. messageLogger) once a new
// notification is broadcast on that topic
var subscription = pubsub.subscribe(INBOX_NEWMESSAGE, messageLogger)

// Publishers are in charge of publishing topics or notifications of
// interest to the application. e.g:
pubsub.publish(INBOX_NEWMESSAGE, "hello world!")

// or
pubsub.publish(INBOX_NEWMESSAGE, ["test", "a", "b", "c"])

// or
pubsub.publish(INBOX_NEWMESSAGE, {
  sender: "hello@google.com",
  body: "Hey again!"
})

// We can also unsubscribe if we no longer wish for our subscribers
// to be notified
pubsub.unsubscribe( subscription )

// Once unsubscribed, this for example won't result in our
// messageLogger being as the subscriber is
// no longer listening
pubsub.publish("inbox/newMessage", "Hello! are you still there?")

// Return the current local time to be used in our UI later
getCurrentTime = function  ( ) {
  var date = new Date(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      y = date.getFullYear(),
      t = date.toLocaleTimeString().toLowerCase()

  return (`${d}/${m}/${y} ${t}`)
}

// Add a new row of data to our fictional grid component
function addGridRow(data) {

  // ui.grid.addRow(data)
  console.log(`updated grid component with: ${data}`);

}

// Update our fictional grid to show the time it was last updated
function updateCounter(data) {

  // ui.grid.updateLastChanged( getCurrentTime() )
  console.log(`data last updated at: ${getCurrentTime()} with ${data}`);
}

// Update the grid using the data passed to our subscribers
gridUpdate = function  (topic, data) {
  if ( data !== undefined) {
    addGridRow( data )
    updateCounter( data )
  }
}

// Create a subscription to the newDataAvailable topic
var subscriber = pubsub.subscribe("newDataAvailable", gridUpdate)

// The following represents updates to our data layer. This could be powered by ajax requests which broadcasr that new data is available to the rest of the application.

// Publish changes to the gridUpdated topic representing new entries
pubsub.publish( "newDataAvailable", {
  summary: "Apple made $5 billion",
  identifier: "APPL",
  stockPrice: 570.91
})

pubsub.publish( "newDataAvailable", {
  summary: "Microsoft made $20 billion",
  identifier: "MSFT",
  stockPrice: 30.85
})