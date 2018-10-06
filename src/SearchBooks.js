import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render(){
    const { query } = this.props.query

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
      </div>
    )
  }
}
export default SearchBooks
