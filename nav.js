const contact2 = document.getElementById('contact-section');
const contact = document.getElementById('contact');
const List = document.getElementById('List');
const bookList = document.getElementById('book-list');
const addNew = document.getElementById('addNew');
const box = document.getElementById('box');
const date = document.getElementById('dateTime');

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
date.innerHTML = new Date();
