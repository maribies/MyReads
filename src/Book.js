import React, { Component } from 'react';

class Book extends Component {
  state = {
    shelf: ''
  }

  //TODO: write a function to loop through array of authors if more than one and list all

  render(){
    const book = this.props.book

    // if (!book) {
    //   return <div className="search-message">Search for your next book by title or author to add to a shelf.</div>
    // }


    return (
          <div className='book-info' key={book.bookId}>
            <img className='book-image' alt='{book.title} cover' src={book.imageLinks.smallThumbnail}></img>
            <h4 className='book-title'>{book.title}</h4>
            <p className='book-author font-light'>{book.authors[0]}</p>
            <div className='book-status'>
              <select className='book-status-dropdown'>
                <option value='Select Shelf'>Select Shelf</option>
                <option value='Current Reads' shelf={this.state.shelf}>Current Reads</option>
                <option value='Want to Read' shelf={this.state.shelf}>Want to Read</option>
                <option value='Read' shelf={this.state.shelf}>Read</option>
              </select>
            </div>
          </div>
    )
  }
}
export default Book
