import React, {Component} from 'react';

class ShelfSelector extends Component {
  state = {
    shelf: ''
  }
  //TODO: write a function to loop through array of authors if more than one and list all
  handleChange = (event) => {
    this.setState({shelf: event.target.value});
    this.props.updateShelf(this.props.book, event.target.value)
    this.props.book.shelf == event.target.value
  }

  render() {
    return (<div className='shelf-selector'>
      <select className='book-status-dropdown' value={this.state.value} onChange={this.handleChange}>
        <option value='Move'>Select Shelf</option>
        <option value='currentlyReading'>Current Reads</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>Remove</option>
      </select>
    </div>)
  }
}
export default ShelfSelector
