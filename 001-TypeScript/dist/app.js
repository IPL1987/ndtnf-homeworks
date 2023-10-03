"use strict"
var book = {
    name: 'Трололо',
    isbn: '123',
};
var container = document.getElementById('content');
if (container) {
    container.textContent = "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ".concat(book.name, ",  ISBN: ").concat(book.isbn);
}
