var initialBooks = [
  { title: "Pride and Prejudice", author: "Jane Austen", price: 14.99 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 11.99 },
  { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", price: 13.99 },
{ title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 18.99 },
{ title: "Moby-Dick", author: "Herman Melville", price: 16.99 },
{ title: "The Hobbit", author: "J.R.R. Tolkien", price: 9.99 },
{ title: "The Great Expectations", author: "Charles Dickens", price: 12.99 },
];

function populateInitialBooks() {
  var allBooksSection = document.getElementById("all-books-section");
  allBooksSection.innerHTML = "";

  initialBooks.forEach(function (book) {
    addBookCard(book.title, book.author, book.price);
  });
}

function showSection(section) {
  document.getElementById("welcome-text").style.display =
    section === "home" ? "block" : "none";
  document.getElementById("all-books-section").style.display =
    section === "all-books" ? "block" : "none";
  document.getElementById("add-book-section").style.display =
    section === "all-books" ? "block" : "none";
  document.getElementById("about-us-section").style.display =
    section === "about-us" ? "block" : "none";
  if (section === "all-books") {
    populateInitialBooks();
  }
}

function addBookCard(title, author, price) {
  var allBooksSection = document.getElementById("all-books-section");

  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <h3>${title}</h3>
        <p>Author: ${author}</p>
        <p>Price: $${price}</p>
        <button onclick="removeBookCard(this)">Remove</button>
    `;

  allBooksSection.appendChild(card);
}

function removeBookCard(button) {
  var card = button.parentNode;
  card.parentNode.removeChild(card);
}

function addBook() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var price = document.getElementById("price").value;

  if (title && author && price) {
    addBookCard(title, author, price);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
  } else {
    alert("Please enter all values to add a new book.");
  }
}

document.getElementById("home-link").addEventListener("click", function () {
  showSection("home");
});

document
  .getElementById("all-books-link")
  .addEventListener("click", function () {
    showSection("all-books");
  });

document.getElementById("about-link").addEventListener("click", function () {
  showSection("about-us");
});
