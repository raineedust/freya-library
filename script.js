const myLibrary = [
  {
    title: "Norse Mythology",
    author: "Neil Gaiman",
    pages: 301,
    readStatus: "Unread",
  },
];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// Display UI

function displayBook() {
  const bookList = document.querySelector(".table-body");
  bookList.textContent = "";

  for (let i = 0; i < myLibrary.length; i += 1) {
    const bookRow = document.createElement("tr");
    bookRow.classList.add("book-info");
    bookList.appendChild(bookRow);

    const bookTitle = document.createElement("td");
    bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);

    const bookAuthor = document.createElement("td");
    bookAuthor.textContent = myLibrary[i].author;
    bookRow.appendChild(bookAuthor);

    const bookPages = document.createElement("td");
    bookPages.textContent = myLibrary[i].pages;
    bookRow.appendChild(bookPages);

    // Book Status
    const bookStatus = document.createElement("td");
    const statusIcon = document.createElement("i");
    bookStatus.textContent = myLibrary[i].readStatus;
    if (myLibrary[i].readStatus === "Read") {
      statusIcon.classList.add("fa-solid", "fa-circle-check");
    } else {
      statusIcon.classList.add("fa-solid", "fa-circle-xmark");
    }
    bookStatus.appendChild(statusIcon);
    bookRow.appendChild(bookStatus);
  }
}

myLibrary.forEach(displayBook);

// Form validation + Add books

const addBook = document.querySelector("#add-book");

function addToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
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
      const readStatus = "Read";
      addToLibrary(title, author, pages, readStatus);
    } else {
      const readStatus = "Unread";
      addToLibrary(title, author, pages, readStatus);
    }
    document.querySelector("form").reset();
    displayBook();
  } else {
    alert("Please enter the details correctly!");
  }
}

addBook.addEventListener("click", () => {
  formVal();
});
