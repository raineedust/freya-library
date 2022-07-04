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
  displayBook();
  console.log(book);
  console.log(myLibrary);
}

function formVal() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  if (
    title !== "" &&
    author !== "" &&
    pages.match(/^([1-9][0-9][0-9]?|1000)$/)
  ) {
    if (document.querySelector("#readStatus").checked) {
      const readStatus = "read";
      addToLibrary(title, author, pages, readStatus);
    } else {
      const readStatus = "unread";
      addToLibrary(title, author, pages, readStatus);
    }
    document.querySelector("form").reset();
  } else {
    alert("Please enter the details correctly!");
  }
}

addBook.addEventListener("click", () => {
  formVal();
});

// Display UI

function displayBook() {
  const table = document.querySelector(".table");
  const row = table.insertRow(1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  cell1.textContent = "NEW CELL1";
  cell2.textContent = "NEW CELL2";
  cell3.textContent = "NEW CELL3";
  cell4.textContent = "NEW CELL4";
}

myLibrary.forEach(displayBook);
