const myLibrary = [];

addBookToLibrary("Grimms' Fairy Tales", "Brothers Grimm", 200);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310);
addBookToLibrary("1984", "George Orwell", 328);


function Book(title, author, pages, isRead=false) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    };

}
function addBookToLibrary(title, author, pages) {
  // take params, create a book then store it in the array
    const book = new Book(title, author, pages);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
  
}
