import React, { useState } from 'react';
import './BookForm.css'; // Import the CSS file

function BookForm({ addBook }) {
  const [book, setBook] = useState({
    id: '',
    name: '',
    author: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.id && book.name && book.author && book.price) {
      addBook(book);
      setBook({ id: '', name: '', author: '', price: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="id">Book ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={book.id}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Book Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={book.name}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={book.author}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={book.price}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="submit-button">Add Book</button>
    </form>
  );
}

export default BookForm;
