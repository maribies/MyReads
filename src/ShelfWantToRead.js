import React, { Component } from 'react';
import Book from './Book.js'

class WantToRead extends Component {
  render(){
    const books = this.props
    let wantToRead = this.props.books.filter(book => book.shelf == 'wantToRead')
    return (
      <div className='shelf-top want-to-read'>
        <h3 className='want-to-read'>Want to Read</h3>
        <div className='shelf'>
          {wantToRead.map((book) => (
          <Book book={book} key={book.id}></Book>
          ))}
        </div>
      </div>
    )
  }
}
export default WantToRead
