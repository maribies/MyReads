import React, { Component } from 'react';
import Book from './Book.js'

class WantToRead extends Component {
  state = {
    want: []
  }
  render(){
    return (
      <div className='shelf-top want-to-read'>
        <h3 className='want-to-read'>Want to Read</h3>
        <div className='shelf'>
          {this.props.books.map((book, index) => (
          <Book book={book} key={book.id}></Book>
          ))}
        </div>
      </div>
    )
  }
}
export default WantToRead
