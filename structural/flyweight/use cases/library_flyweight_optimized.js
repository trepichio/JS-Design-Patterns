// Flyeight optimized version
var Book = function (title, author, genre, pageCount, publisherID, ISBN) {
  this.title = title
  this.author = author
  this.genre = genre
  this.pageCount = pageCount
  this.publisherID = publisherID
  this.ISBN = ISBN
}

// Book Factory singleton
var BookFactory = (() => {
  var existingBooks = {},
      existingBook;

  return {
    createBook: function (title, author, genre, pageCount, publisherID, ISBN) {

      // Find out if a particular book meta-data combination has been created
      existingBook = existingBooks[ISBN]
      if (!!existingBook) {
        return existingBook
      }
      else {
        // if not, let's created a new instance of the book and store it
        var book = new Book(title, author, genre, pageCount, publisherID, ISBN)
        existingBooks[ISBN] = book
        return book
      }
    }
  }
})();

// BookRecordManager singleton
var BookRecordManager = (() => {
  var bookRecordDatabase = {}

  return {
    // add a new book into the library system
    addBookRecord: function (id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
      var book = BookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN)

      bookRecordDatabase[id] = {
        checkoutMember,
        checkoutDate,
        dueReturnDate,
        availability,
        book
      }
    },

    getBookRecord: function (id) {
      return bookRecordDatabase[id]
    },

    updateCheckoutStatus: function (bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
      var record = bookRecordDatabase[bookID]
      record.availability = newStatus
      record.checkoutDate = checkoutDate
      record.checkoutMember = checkoutMember
      record.dueReturnDate = newReturnDate
    },

    extendCheckoutPeriod: function (bookID, newReturnDate) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate
    },

    isPastDue: function (bookID) {
      var currentDate = new Date()
      return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate)
    }
  }
})();

BookRecordManager.addBookRecord(1, 'Inteligencia Emocional', 'Daniel Goleman', 'Psichology', 543, 23452, 375902387589, '02/02/2021', 'John', '02/03/2021', true)

console.log(BookRecordManager.isPastDue(1))

BookRecordManager.extendCheckoutPeriod(1, '02/05/2021')

console.log(BookRecordManager.isPastDue(1))

console.log(BookRecordManager.getBookRecord(1));