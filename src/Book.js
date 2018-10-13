import React, {Component} from 'react';
import ShelfSelector from './ShelfSelector';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Book extends Component {
  
  render() {
    const { book, updateShelf, shelves, id } = this.props

    let authors
    if (!book.authors) {
      authors = 'Unknown Author'
    } else {
      authors = book.authors.join(', ')
    }

    return (
      <div className='book-info' key={book.id} id={book.id}>
        {(!book.imageLinks && (<div className='book-image'><FontAwesomeIcon icon="book-open"/></div>)) || (book.imageLinks.smallThumbnail && (<img className='book-image' alt='book cover' src={book.imageLinks.smallThumbnail}></img>))}
        <h4 className='book-title'>{book.title}</h4>
        <p className='book-author font-light'>{authors}</p>

        <ShelfSelector updateShelf={updateShelf} id={book.id} shelves={shelves} value={this.value} book={book}></ShelfSelector>
      </div>)
  }
}
export default Book
