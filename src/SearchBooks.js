import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: ''
  }

  updateQuery = (checkQuery) => {
    this.setState({query: checkQuery})
    this.props.onSearch(checkQuery)
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  returnShelf(searchedBook, books) {
    let results = books.filter(book => searchedBook.id === book.id)
    if (results.length !== 0) {
    return results[0].shelf
    } else {
      return 'none'
    };
  };

  render() {
    const {query} = this.props.query
    const {queriedBooks, books, updateShelf, shelf} = this.props

    if (query) {
      let checkQuery = new RegExp(escapeRegExp(query), 'i')
      checkQuery.trim();
    }

    let showingBooks
    let results
    if (!queriedBooks) {
      showingBooks = []
    } else if (queriedBooks.length >= 0) {
      showingBooks = queriedBooks
    } else {
      showingBooks = []
      results = "Sorry! No Results Found. Please Search Again."
    }

    return (
      <div className='contain-books'>
        <h1 className='title'>MyReads Library</h1>
        <div className='contain-books-search'>

          <form>
            <input className='search-books font-light' type='text' placeholder='Search for Books' value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}></input>
          </form>

        </div>

        <div className="to-shelves-container">
          <Link className="to-shelves" to="/">Back to Bookshelf</Link>
        </div>

        <p className="results-message">{results}</p>

        <div className="results-container shelf">
          {showingBooks.map((book) => (
            <Book
              book={book}
              key={book.id}
              updateShelf={updateShelf}
              shelf={this.returnShelf(book, this.props.books)}
              id={book.id}>
            </Book>)
          )}
        </div>
      </div>
    )
  }
}
export default SearchBooks
