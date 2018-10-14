import React from 'react';
import ShelfSelector from './ShelfSelector';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Book = ({ book, updateShelf, id, shelf }) => {

    const placeholder = <div className='book-image'><FontAwesomeIcon icon="book-open"/></div>;
    const thumbnail = book.imageLinks.smallThumbnail && (<img className='book-image' alt='book cover' src={book.imageLinks.smallThumbnail}></img>);
    const coverImg = book.imageLinks ? thumbnail : placeholder;

    return (
      <div className='book-info' key={book.id} id={book.id} shelf={shelf}>
        {coverImg}
        <h4 className='book-title'>{book.title}</h4>
        <p className='book-author font-light'>{book.authors ? book.authors.join(',') : 'Unknown Author'}</p>

        <ShelfSelector
          updateShelf={updateShelf}
          id={book.id}
          book={book}
          shelf={shelf}>
        </ShelfSelector>
      </div>
    )
  }

export default Book
