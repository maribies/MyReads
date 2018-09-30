import React, { Component } from 'react';
import Book from './Book.js'

class WantToRead extends Component {
  state = {
    want: []
  }
  render(){
    const books = [
      { title: "Guns, Germs, and Steel", author: "Jared Diamond", cover: "https://via.placeholder.com/96x160", bookId: "3"},
      { title: "Emotional Design", author: "Don Norman", cover: "https://via.placeholder.com/96x160", bookId: "4"},
      { title: "The Design of Everyday Things", author: "Don Norman", cover: "https://via.placeholder.com/96x160", bookId: "5"},
    ]
    return (
      <div className='shelf want-to-read'>
        <h3 className='want-to-read'>Want to Read</h3>
          {books.map(book => (
          <Book book={book}></Book>
          ))}
      </div>
    )
  }
}
export default WantToRead
