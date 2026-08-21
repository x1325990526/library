const myLibrary = [];

function Book(id, title, author, pages, isRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    };

}
function addBookToLibrary() {
  // take params, create a book then store it in the array
  
}
