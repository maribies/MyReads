import React from 'react';
import Book from './Book'

const Shelves = ({ books, updateShelf, id, shelf }) => {

  let currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
  let read = books.filter(book => book.shelf === 'read')
  let wantToRead = books.filter(book => book.shelf === 'wantToRead')

  return (
    <div className='bookshelf'>
      <div className='shelf-top current-reads'>
        <h3 className='current-reads'>Current Reads</h3>
        <div className='shelf'>
          {currentlyReading.map((book) =>
            (<Book
              book={book}
              key={book.id}
              updateShelf={updateShelf}
              shelf={book.shelf}
              id={book.id}>
            </Book>))}
        </div>
      </div>

      <div className='shelf-top want-to-read'>
        <h3 className='want-to-read'>Want to Read</h3>
        <div className='shelf'>
          {wantToRead.map((book) =>
            (<Book
              book={book}
              key={book.id}
              updateShelf={updateShelf}
              shelf={book.shelf}
              id={book.id}>
            </Book>))}
        </div>
      </div>

      <div className='shelf-top read'>
        <h3 className='read'>Read</h3>
        <div className='shelf'>
          {read.map((book) =>
            (<Book
              book={book}
              key={book.id}
              updateShelf={updateShelf}
              shelf={book.shelf}
              id={book.id}>
            </Book>))}
        </div>
      </div>
    </div>
  );
}

export default Shelves
