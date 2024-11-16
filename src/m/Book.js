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