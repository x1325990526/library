const myLibrary = [];

addBookToLibrary("Grimms' Fairy Tales", "Brothers Grimm", 200);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310);
addBookToLibrary("1984", "George Orwell", 328);

const booksContainer = document.querySelector(".books-container");
const form = document.querySelector("#newbook-form");


displayBooks();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const title = data.get("title");
    const author = data.get("author");
    const pages = Number(data.get("pages"));
    const isRead = data.has("isread");

    addBookToLibrary(title, author, pages, isRead);
    
    displayBooks();

});

function displayBooks() {
    booksContainer.textContent = '';
    for (const book of myLibrary){
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        booksContainer.appendChild(bookItem);

        const title = document.createElement("div");
        title.textContent = `title: ${book.title}`;
        bookItem.appendChild(title);

        const author = document.createElement("div");
        author.textContent = `author: ${book.author}`;
        bookItem.appendChild(author);

        const pages = document.createElement("div");
        pages.textContent = `pages: ${book.pages}`;
        bookItem.appendChild(pages);

    };
};

function Book(title, author, pages, isRead=false) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    };

}
function addBookToLibrary(title, author, pages, isRead=false) {
  // take params, create a book then store it in the array
    const book = new Book(title, author, pages, isRead);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
  
}



