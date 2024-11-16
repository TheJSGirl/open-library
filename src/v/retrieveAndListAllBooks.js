/***********************************************
***  Methods for the use case createBook  ******
************************************************/
pl.v.retrieveAndListAllBooks = {
  setupUserInterface: function () {
    // console.log(document.forms['Book'])
    const tableEle = document.querySelector("table#books>tbody");
    Book.retrieveAll();
    const keys = Object.keys(Book.instances);

    for(let i=0; i< keys.length; i++) {
      let row = tableEle.insertRow();
      row.insertCell(-1).textContent = Book.instances[keys[i]].isbn;
      row.insertCell(-1).textContent = Book.instances[keys[i]].title;
      row.insertCell(-1).textContent = Book.instances[keys[i]].year;
    }
  }
};