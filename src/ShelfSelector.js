import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'

class ShelfSelector extends Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
    this.props.updateShelf(this.props.book, event.target.value)
  }

  render() {
    const { book, updateShelf, shelves, id } = this.props

    let shelf = (
    BooksAPI.getId(id).then(book => {
      let value = book.shelf
      return value
    }).then((res) => {
      this.setState(state => ({value: res}))
    })
    )

    return (
      <div className='shelf-selector'>
        <label> Shelf </label>
        <select className='book-status-dropdown' onChange={this.handleChange}  value={this.state.value}>
          <option value='currentlyReading'>Current Reads</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>)
  }
}
export default ShelfSelector
