/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.collection = [];
    this.bookList = document.getElementById('book-list');
    this.bookTitle = document.getElementById('book-title');
    this.bookAuthor = document.getElementById('book-author');
    this.addBookBtn = document.getElementById('add-book-btn');

    if (localStorage.getItem('bookCollection')) {
      this.collection = JSON.parse(localStorage.getItem('bookCollection'));
      this.renderBookList();
    }

    this.addBookBtn.addEventListener('click', this.addBook.bind(this));
  }

  addBook() {
    const title = this.bookTitle.value;
    const author = this.bookAuthor.value;
    const book = new Book(title, author);
    this.collection.push(book);
    this.renderBookList();
    this.saveBookCollection();
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }

  removeBook(index) {
    this.collection.splice(index, 1);
    this.renderBookList();
    this.saveBookCollection();
  }

  renderBookList() {
    this.bookList.innerHTML = '';
    this.collection.forEach((book, index) => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      const infoContainer = document.createElement('div');
      infoContainer.classList.add('info-container');

      const title = document.createElement('div');
      title.classList.add('book-title');
      title.innerHTML = book.title;

      const author = document.createElement('div');
      author.innerHTML = `by ${book.author}`;

      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'Remove';
      removeBtn.onclick = () => this.removeBook(index);

      const hr = document.createElement('hr');

      infoContainer.appendChild(title);
      infoContainer.appendChild(author);
      bookItem.appendChild(infoContainer);
      bookItem.appendChild(removeBtn);
      bookItem.appendChild(hr);

      this.bookList.appendChild(bookItem);
    });
  }

  saveBookCollection() {
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
  }
}

const bookCollection = new BookCollection();
