import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends Component {
  state = {
    shelf: '',
  }
  //TODO: write a function to loop through array of authors if more than one and list all
  handleChange = (event) => {
    this.setState({shelf: event.target.value});
  }

  render(){
    const book = this.props.book

    // if (!book) {
    //   return <div className="search-message">Search for your next book by title or author to add to a shelf.</div>
    // }

    return (
          <div className='book-info' key={book.id}>
            <img className='book-image' alt='book cover' src={book.imageLinks.smallThumbnail}></img>
            <h4 className='book-title'>{book.title}</h4>
            <p className='book-author font-light'>{book.authors[0]}</p>

              <select className='book-status-dropdown' value={this.state.value} onChange={this.handleChange}>
                <option value='None'>Select Shelf</option>
                <option value='currentlyReading'>Current Reads</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
              </select>
          </div>
    )
  }
}
export default Book
