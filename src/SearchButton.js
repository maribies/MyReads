import React from 'react'
import {Link} from 'react-router-dom'

const SearchButton = () => {
    return (
      <div className="btn-container">
        <Link className="add-books-btn-link" to="/search">
          <button className="add-books-btn">Search & Add Books</button>
        </Link>
    </div>
  );
}
export default SearchButton
