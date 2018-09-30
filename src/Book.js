import React, { Component } from 'react';

class Book extends Component {

  render(){
    const book = this.props.books;

    // if (!book) {
    //   return <div className="search-message">Search for your next book by title or author to add to a shelf.</div>
    // }

    return (
      <div className='book-info'>
        <img className='book-image' alt='book cover image' src="https://via.placeholder.com/96x160"></img>
        <h4 className='book-title'>The Fountainhead</h4>
        <p className='book-author font-light'>Ayn Rand</p>
      </div>
    )
  }
}
export default Book
