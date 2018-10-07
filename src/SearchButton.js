import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SearchButton extends Component {
  render() {
    return (<div className="btn-container">
      <Link className="add-books-btn-link" to="/search">
        <button className="add-books-btn">Search & Add Books</button>
      </Link>
    </div>)
  }
}
export default SearchButton
