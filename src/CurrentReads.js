import React, { Component } from 'react';
import Book from './Book.js'

class CurrentReads extends Component {
  state = {
    shelf: '',
  }
  moveShelf = (value) => {
    this.setState({shelf: value})
  }
  render(){
    return (
      <div className='shelf-top current-reads'>
        <h3 className='current-reads'>Current Reads</h3>
        <div className='shelf'>
          {this.props.books.map(book => (
          <Book book={book} key={book.id} getShelf={this.moveShelf}></Book>
          ))}
        </div>
      </div>
    )
  }
}
export default CurrentReads
