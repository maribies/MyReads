import React, { Component } from 'react';
import Book from './Book.js'

class CurrentReads extends Component {
  render(){
    const books = this.props
    let currentlyReading = this.props.books.filter(book => book.shelf == 'currentlyReading')

    return (
      <div className='shelf-top current-reads'>
        <h3 className='current-reads'>Current Reads</h3>
        <div className='shelf'>
          {currentlyReading.map((book) => (
            <Book book={book} key={book.id}></Book>
          ))}
        </div>
      </div>
    )
  }
}
export default CurrentReads
