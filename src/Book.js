import React, { Component } from 'react';
import ShelfSelector from './ShelfSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Book extends Component {

  render(){
    const {books, book, updateShelf} = this.props

    let authors
    if (!book.authors) {
      authors = 'Unknown Author'
    } else {
      authors = book.authors.join(', ')
    }

    return (

      <div className='book-info' key={book.id}>
        {!book.imageLinks && (
          <div className='book-image'><FontAwesomeIcon icon="book-open" /></div>
        ) || book.imageLinks.smallThumbnail && (
          <img className='book-image' alt='book cover' src={book.imageLinks.smallThumbnail}></img>
        )}
        <h4 className='book-title'>{book.title}</h4>
        <p className='book-author font-light'>{authors}</p>


        <ShelfSelector book={ book } books={ books } key={ book.id } updateShelf={ updateShelf }></ShelfSelector>
      </div>
    )
  }
}
export default Book
