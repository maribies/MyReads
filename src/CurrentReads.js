import React, { Component } from 'react';
import Book from './Book.js'

class CurrentReads extends Component {
  state = {
    current: []
  }
  render(){
    return (
      <div className='shelf-top current-reads'>
        <h3 className='current-reads'>Current Reads</h3>
        <div className='shelf'>
          {this.props.books.map(book => (
          <Book book={book} key={book.bookId}></Book>
          ))}
        </div>
      </div>
    )
  }
}
export default CurrentReads
