import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchButton extends Component {
  render(){
    return (
      <div className="btn-container">
        <button className="add-books-btn">Search & Add Books</button>
      </div>
    )
  }
}
export default SearchButton
