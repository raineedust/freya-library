const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    readStatus: "unread",
  },
];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// Form validation + Add books

const addBook = document.querySelector("#add-book");

function addToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
  console.log(book);
  console.log(myLibrary);
}

function formVal() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  if (title !== "" && author !== "" && pages.match(/[^1-9]/)) {
    if (document.querySelector("#readStatus").checked) {
      const readStatus = "read";
      addToLibrary(title, author, pages, readStatus);
    } else {
      const readStatus = "unread";
      addToLibrary(title, author, pages, readStatus);
    }
  } else {
    alert("Please enter the details correctly!");
  }
}

// How to route title, author, pages, readStatus to addBook

addBook.addEventListener("click", () => {
  formVal();
});
