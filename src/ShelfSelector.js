import React from 'react';

const ShelfSelector = ({ book, updateShelf, id, shelf }) => {

  const handleChange = event => {
    updateShelf(book, event.target.value)
  }

  return (
    <div className='shelf-selector'>
      <label> Shelf </label>
      <select
        className='book-status-dropdown'
        onChange={event => handleChange(event)}
        value={shelf}>

        <option value='currentlyReading'>Current Reads</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
}
export default ShelfSelector
