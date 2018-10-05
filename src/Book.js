import React, { Component } from 'react';
import ShelfSelector from './ShelfSelector';

class Book extends Component {

  //TODO: write a function to loop through array of authors if more than one and list all

  render(){
    const {books, book, updateShelf} = this.props

    // if (!book) {
    //   return <div className="search-message">Search for your next book by title or author to add to a shelf.</div>
    // }

    return (
          <div className='book-info' key={book.id}>
            <img className='book-image' alt='book cover' src={book.imageLinks.smallThumbnail}></img>
            <h4 className='book-title'>{book.title}</h4>
            <p className='book-author font-light'>{book.authors[0]}</p>

            <ShelfSelector book={ book } books={ books } key={ book.id } updateShelf={ updateShelf }></ShelfSelector>
          </div>
    )
  }
}
export default Book
