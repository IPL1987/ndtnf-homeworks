interface Book {
  name: string;
  isbn: string;
}

const book: Book = {
  name: 'Трололо',
  isbn: '123',
};

const container = document.getElementById('content');
if (container) {
  container.textContent = `Название: ${book.name},  ISBN: ${book.isbn}`;
}
