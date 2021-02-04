// A very simple new mail handler

// A count of the number of messages received
var mailCounter = 0

// Initialize subscribers that will listen out for a topic
// with the name "inbox/newMessage"

// Render a preview of new messages
var subscribers1 = Events.subscribe("inbox/newMessage", function (topic, data) {
  // Log the topic for debugging purposes
  console.log("A new message was received: ", topic);
  // Use the data that was passed from our subject
  // to display a message preview to the user
  document.querySelector(".messageSender").innerHTML = (data[0].sender)
  console.log(document.querySelector(".messagePreview"))
  document.querySelector(".messagePreview").innerHTML = (data[0].body)

})

// Here's another subscriber using the same data to perform a different task.

// Update the counter displaying the number of new
// messages received via the publisher

var subscriber2 = Events.subscribe("inbox/newMessage", function (topic, data) {
  document.querySelector('.newMessageCounter').innerHTML = (++mailCounter)
})

Events.publish("inbox/newMessage", [{
  sender: "hello@google.com",
  body: "Hey there! How are you doing today?\r\nI'm waiting for a reply."
}])

setTimeout(() => {

  Events.publish("inbox/newMessage", [{
    sender: "reply@google.com",
    body: "You've just got a reply!"
  }])
},3000)
