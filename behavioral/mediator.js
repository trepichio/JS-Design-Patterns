class Member {
  constructor(name) {
    this.name = name
    this.chatroom = null
  }
  send(message, toMember) {
    this.chatroom.send(message, this, toMember)
  }
  receive(message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  }
}

class Chatroom {
  constructor() {
    this.members = {}
  }
  addMember(member) {
    this.members[member.name] = member
    member.chatroom = this
  }
  send(message, fromMember, toMember) {
    toMember.receive(message, fromMember)
  }
}

const chat = new Chatroom()

const tom = new Member('Tom')
const john = new Member('John')
const mike = new Member('Mike')

chat.addMember(tom)
chat.addMember(john)
chat.addMember(mike)

john.send("Hi!", tom)
tom.send("hey John! What's up?",john)
mike.send("how are you, mate?", john)