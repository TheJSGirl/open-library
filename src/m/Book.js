function Book(slots) {
  this.title = slots.title;
  this.isbn = slots.isbn;
  this.year = slots.year;
}

Book.instances = {};

Book.add = function(slots) {
  var book = new Book(slots);
  Book.instances[slots.isbn] = book;
  console.log("Book " + slots.isbn + 'Created')

}


Book.saveAll = function() {
  var booksString="", error=false,
      nmrOfBooks = Object.keys( Book.instances).length;  
      try {
        booksString = JSON.stringify(Book.instances);
        localStorage.setItem("books", booksString);
      }
      catch (e) {
        alert("Error when writing to Local Storage\n" + e);
        error = true;
      }
      if (!error) console.log( nmrOfBooks + " books saved.");
}

// Convert row to object
Book.convertRow2Obj = function (bookRow) {
  var book = new Book( bookRow);
  return book;
};

Book.retrieveAll = function() {
  // var key = "", keys=[], booksString="", books={}, i =0
  var booksString = "", books = {}
  try {
    if(localStorage.getItem('books')) {
      booksString = localStorage.getItem('books');
    }
  }catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if(booksString) {
    books = JSON.parse(booksString);
    keys = Object.keys( books);
    for (i=0; i < keys.length; i++) {
      Book.instances[keys[i]] = Book.convertRow2Obj(books[keys[i]]);
    }

  }
}

Book.delete = function(isbn) {
  if(Book.instances[isbn]){
    delete Book.instances[isbn];
  }
  else {
    console.log("There is no book with ISBN " + isbn + " in the database!");
  }

}