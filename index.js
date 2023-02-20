import BookCollection from './modules/bookcollection.js';
import { DateTime } from './modules/luxon.js';
import {
  List, bookList, box, contact2, contact, addNew, date,
} from './modules/nav.js';

const bookCollection = new BookCollection();
const addBookBtn = document.getElementById('add-book-btn');

List.addEventListener('click', () => {
  bookList.classList.remove('hidden');
  box.classList.add('hidden');
  contact2.classList.add('hidden');
});

contact.addEventListener('click', () => {
  bookList.classList.add('hidden');
  box.classList.add('hidden');
  contact2.classList.remove('hidden');
});

addNew.addEventListener('click', () => {
  bookList.classList.add('hidden');
  box.classList.remove('hidden');
  contact2.classList.add('hidden');
});
date.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;
addBookBtn.addEventListener('click', () => {
  bookCollection.addBook();
});