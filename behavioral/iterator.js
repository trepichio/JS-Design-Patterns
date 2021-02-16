const items = [1, 'developer', false, 2.52, 4]

class Iterator {
  constructor(items) {
    this.items = items
    this.index = 0
  }

  reset() {
    this.index = 0
  }

  first() {
    this.reset()
    return this.next()
  }

  hasNext() {
    return this.index < this.items.length - 1
  }

  next() {
    if (typeof this.items[this.index] == 'number') {
      return this.items[this.index++]
    }
    if (this.hasNext()) {
      this.index++
      return this.next()
    }
  }

  each(callback) {
    for (let item = this.first(); item; item = this.next()) {
      callback(item)
    }
  }
}

const iter = new Iterator(items)
console.log(items);

console.log('while iter.next():');
while (next = iter.next()) {
  console.log(next);
}

iter.reset()

// this loop doesn't output last item because it only checks if there is
// another item from the current index left by the business logic of
// iter.next(), so iter.hasNext() is only trustful internally.
console.log('\nwhile iter.hasNext()');
while (iter.hasNext()) {
  console.log(iter.next());
}

console.log('\nfirst')
console.log(iter.first());

console.log('\neach iter item:');
iter.each((item) => {
  console.log(item);
})