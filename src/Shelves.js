import React, { Component } from 'react';
import Book from './Book'
import { Link } from 'react-router-dom'
import SearchButton from './SearchButton'

class Shelves extends Component {

  render(){
    const {books, updateShelf} = this.props

    let currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading')
    let read = this.props.books.filter(book => book.shelf === 'read')
    let wantToRead = this.props.books.filter(book => book.shelf === 'wantToRead')

    return (
      <div className="contain-books">
        <h1 className='title'>MyReads Library</h1>
        <Link className="add-books-btn-link" to="/search">
         <SearchButton></SearchButton>
        </Link>
        <div className='bookshelf'>
          <div className='shelf-top current-reads'>
            <h3 className='current-reads'>Current Reads</h3>
            <div className='shelf'>
              {currentlyReading.map((book) => (
                <Book book={ book } books={ books } key={ book.id } updateShelf={ updateShelf }></Book>
              ))}
            </div>
          </div>

          <div className='shelf-top want-to-read'>
            <h3 className='want-to-read'>Want to Read</h3>
            <div className='shelf'>
              {wantToRead.map((book) => (
              <Book book={ book } books={ books } key={ book.id } updateShelf={ updateShelf }></Book>
              ))}
            </div>
          </div>

          <div className='shelf-top read'>
            <h3 className='read'>Read</h3>
            <div className='shelf'>
              {read.map((book) => (
              <Book book={ book } books={ books } key={ book.id } updateShelf={ updateShelf }></Book>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Shelves
