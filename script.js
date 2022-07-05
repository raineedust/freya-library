const myLibrary = [
  {
    title: "Norse Mythology",
    author: "Neil Gaiman",
    pages: 301,
    readStatus: "Read",
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    pages: 264,
    readStatus: "Read",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
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

    // textContent partially not working, substituted with CSS class content.
    // bookStatus.textContent = myLibrary[i].readStatus;
    if (myLibrary[i].readStatus === "Read") {
      statusIcon.classList.add("fa-solid", "fa-book-open-reader", "read");
    } else if (myLibrary[i].readStatus === "Unread") {
      statusIcon.classList.add("fa-solid", "fa-book-open", "unread");
    }
    bookRow.appendChild(bookStatus);
    bookStatus.appendChild(statusIcon);

    // Book Removal
    const bookRemove = document.createElement("td");
    const removeIcon = document.createElement("i");
    removeIcon.classList.add("fa-solid", "fa-trash-can", "trash");

    // textContent partially not working, substituted with CSS class content.
    // bookRemove.textContent = "Remove This Book ";
    bookRow.appendChild(bookRemove);
    bookRemove.appendChild(removeIcon);
  }
}

myLibrary.forEach(displayBook);

// Book Controls

function bookControls() {
  document.addEventListener("click", (e) => {
    const { target } = e;
    const editRow = target.parentNode.parentNode.rowIndex - 1;

    for (let i = 0; i < myLibrary.length; i += 1) {
      // Book Removal
      if (target.classList.contains("fa-trash-can")) {
        myLibrary.splice(editRow, 1);
        displayBook();
      }

      // Book Status
      else if (target.classList.contains("fa-book-open")) {
        myLibrary[i].readStatus = "Read";
        target.classList.add("fa-book-open-reader");
        target.classList.add("read");
        target.classList.remove("unread");
        target.classList.remove("fa-book-open");
      } else if (target.classList.contains("fa-book-open-reader")) {
        myLibrary[i].readStatus = "Unread";
        target.classList.add("fa-book-open");
        target.classList.add("unread");
        target.classList.remove("read");
        target.classList.remove("fa-book-open-reader");
      }
    }
  });
}

bookControls();

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
