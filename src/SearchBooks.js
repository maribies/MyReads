import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.props.onSearch(query)
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render(){
    const { query } = this.props.query
    const { queriedBooks, books, updateShelf } = this.props

    let showingBooks
    if (queriedBooks.length > 0) {
      showingBooks = queriedBooks
    } else {
      showingBooks = books
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

        <div className="results-container">
          {showingBooks.map((book) => (
              <Book book={ book } books={ books } key={ book.id } updateShelf={ updateShelf }></Book>
          ))}
        </div>
      </div>
    )
  }
}
export default SearchBooks
