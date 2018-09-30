import React, { Component } from 'react';

class Book extends Component {
  state = {
    current: '',
    want: '',
    read: ''
  }

  render(){
    const book = this.props.book

    // if (!book) {
    //   return <div className="search-message">Search for your next book by title or author to add to a shelf.</div>
    // }


    return (
          <div className='book-info' key={book.bookId}>
            <img className='book-image' alt='book cover image' src={book.cover}></img>
            <h4 className='book-title'>{book.title}</h4>
            <p className='book-author font-light'>{book.author}</p>
          </div>
    )
  }
}
export default Book
