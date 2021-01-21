// url: https://www.googleapis.com/books/v1/volumes?q=aliens

// let bookContainer = document.getElementById('book-ul');

let bookUrl = "https://www.googleapis.com/books/v1/volumes?q=aliens"

fetch(bookUrl)
  .then(resp => resp.json())
  .then(jsonObj => {
    console.log(jsonObj);
    //iteration - going over one element at a time
    //forEach accepts a ____ as an argument? a callback function
    //the callback function is a function that takes in one argument (a single element from the array at a time)
    //and performs some kind of action
    //ie directions for what to do 'for each' element in the array

    //we can define the callback functions in line anonymously (without a name) or outside of the function, give them a name, and then reference them

    jsonObj.items.forEach(function(bookItem){
      new Book(bookItem.volumeInfo.title, bookItem.volumeInfo.authors)
    })
    Book.renderAllBooks()
  })

class Book {
  static all = []
  static bookContainer = document.getElementById('books-ul');

  constructor(title, authors){
    this.title = title;
    this.authors = authors;

    this.li = document.createElement('li');
    this.li.innerHTML = `${this.title} - ${this.authors}`
    Book.all.push(this)

  }

  static renderAllBooks(){
    Book.all.forEach(function(bookItem){
      Book.bookContainer.appendChild(bookItem.li)
    })
  }

}
