import React, { Component } from 'react';
import Book from './Book.js'

class Read extends Component {
  render(){
    const books = this.props
    let read = this.props.books.filter(book => book.shelf == 'read')

    return (
      <div className='shelf-top read'>
        <h3 className='read'>Read</h3>
        <div className='shelf'>
          {read.map((book) => (
          <Book book={book} key={book.id}></Book>
          ))}
        </div>
      </div>
    )
  }
}
export default Read
