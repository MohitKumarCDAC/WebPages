import React from 'react';
import './BookList.css'; // Import the CSS file

function BookList({ books, deleteBook }) {
  return (
    <div className="book-list-container">
      <h2 className="book-list-title">Book List</h2>
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id} className="book-list-item">
            <span className="book-details">
              {book.id} -Book-Name:-{book.name} , Author-Name:-{book.author} , Book-Price:-{book.price}
            </span>
            <button
              className="book-delete-button"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
