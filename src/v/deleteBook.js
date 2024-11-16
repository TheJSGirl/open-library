/***********************************************
***  Methods for the use case createBook  ******
************************************************/
pl.v.deleteBook = {
  setupUserInterface: function () {
    console.log(document.forms['Book'].selectBook)
    var selectBookEle = document.forms['Book'].selectBook;
    var deleteBook = document.forms['Book'].commit;
    
    console.log('delete', deleteBook)
    // // load all book objects
    Book.retrieveAll();
    const keys = Object.keys(Book.instances);
    for(let i=0; i<keys.length; i++) {
      let book = Book.instances[keys[i]];
      let optionEle = document.createElement('option');
      optionEle.text = book.title;
      optionEle.value = book.isbn;
      selectBookEle.add(optionEle, null)
    }
    // // set an event handler for the submit/save button
    deleteBook.addEventListener("click", pl.v.deleteBook.handleDeleteBookEvent);
    // saveButton.addEventListener("click", pl.v.createBook.handleSaveButtonClickEvent);
    
    // // set a handler for the event when the browser window/tab is closed
    window.addEventListener("beforeunload", Book.saveAll);
  },
  // save user input data
  handleDeleteBookEvent: function() {
    console.log("clicked---")
    let deleteBookId = document.forms['Book'].selectBook.value;
    let selectedOpt = document.forms['Book'].selectBook;
    if (deleteBookId) {
      Book.delete(deleteBookId);
      // remove deleted book from select options
      selectedOpt.remove(selectedOpt.selectedIndex);
    }

  }
  // handleSaveButtonClickEvent: function() {
  //   var formEl = document.forms['Book'];
  //   var slots = { isbn: formEl.isbn.value, 
  //           title: formEl.title.value, 
  //           year: formEl.year.value};
  //   Book.add(slots);
  //   formEl.reset();
  // }

};