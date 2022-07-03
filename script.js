const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addToLibrary() {}

Book.prototype.bookInfo = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}.`;
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "unread");
console.log(theHobbit.bookInfo());
