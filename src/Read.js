import React, { Component } from 'react';
import Book from './Book.js'

class Read extends Component {
  state = {
    read: []
  }
  render(){
    return (
      <div className='shelf-top read'>
        <h3 className='read'>Read</h3>
        <div className='shelf'>
          {this.props.books.map((book, index) => (
          <Book book={book} key={book.bookId}></Book>
          ))}
        </div>
      </div>
    )
  }
}
export default Read
