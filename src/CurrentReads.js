import React, { Component } from 'react';
import Book from './Book.js'

class CurrentReads extends Component {
  state = {
    current: []
  }
  render(){
    const books = [
      { title: "The Fountainhead", author: "Ayn Rand", cover: "https://via.placeholder.com/96x160", bookId: "1"},
      { title: "Atlas Shrugged", author: "Ayn Rand", cover: "https://via.placeholder.com/96x160", bookId: "2"},
    ]
    return (
      <div className='shelf current-reads'>
        <h3 className='current-reads'>Current Reads</h3>
        {books.map(book => (
        <Book book={book}></Book>
        ))}
      </div>
    )
  }
}
export default CurrentReads
