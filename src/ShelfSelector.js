import React, { Component } from 'react';

class ShelfSelector extends Component {
  state = {
    shelf: '',
  }
  //TODO: write a function to loop through array of authors if more than one and list all
  handleChange = (event) => {
    this.setState({shelf: event.target.value});
  }

  render(){
    const {books, book, updateShelf} = this.props

    // if (!book) {
    //   return <div className="search-message">Search for your next book by title or author to add to a shelf.</div>
    // }

    return (
          <div className='shelf-selector'>
              <select className='book-status-dropdown' value={this.state.value} onChange={this.handleChange}>
                <option value='None'>Select Shelf</option>
                <option value='currentlyReading'>Current Reads</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
              </select>
          </div>
    )
  }
}
export default ShelfSelector
