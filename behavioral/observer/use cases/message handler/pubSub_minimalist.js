var pubsub = {};

((myObject) => {
  // Storage for topics that can be broadcast
  // or listened to
  var topics = {}

  // A topic identifier
  var subUid = -1

  // Publish or broadcast events of interest
  // with a specific topic name and arguments
  // such as the data to pass along
  myObject.publish = function (topic, args) {

    if (!topics[topic]) {
      return false
    }

    var subscribers = topics[topic],
        len = subscribers ? subscribers.length : 0

    while (len--) {
      subscribers[len].func(topic, args)
    }

    return this
  }

  // Subscribe to events of interest
  // with a specific topic name and a
  // callback function, to be executed
  // when the topic/event is observed
  myObject.subscribe = function (topic, func) {

    if (!topics[topic]) {
      topics[topic] = []
    }

    var token = (++subUid ).toString()
    topics[topic].push({
      token,
      func
    })

    return token
  }

  // Unsubscribe from a specific topic,
  // based on a tokenized reference
  // to the subscription
myObject.unsubscribe = function (token) {
  for (const m in topics) {
    // if (Object.hasOwnProperty.call(topics, m)) {
    if (topics[m]) {

      for (var i = 0, len = topics[m].length; i < len; i++) {
        if (topics[m][i].token === token) {
          topics[m].splice(i, 1);
          return token
        }
      }

    }
  }
  return this
}

})(pubsub);

module.exports = pubsub;