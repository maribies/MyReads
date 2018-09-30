import React, { Component } from 'react';
import Book from './Book.js'

class Read extends Component {
  state = {
    read: []
  }
  render(){
    const books = [
      { title: "Harry Potter and the Philsophers Stone", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "6"},
      { title: "Harry Potter and the Chamber of Secrets", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "7"},
      { title: "Harry Potter and the Prisoner of Azkaban", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "8"},
      { title: "Harry Potter and the Goblet of Fire", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "9"},
      { title: "Harry Potter and the Order of the Phoenix", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "10"},
      { title: "Harry Potter and the Half Blood Prince", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "11"},
      { title: "Harry Potter and the Deathly Hallows", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "12"},
    ]
    return (
      <div className='shelf read'>
        <h3 className='read'>Read</h3>
          {books.map(book => (
          <Book book={book}></Book>
          ))}
      </div>
    )
  }
}
export default Read
