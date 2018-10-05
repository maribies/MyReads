import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import CurrentReads from './ShelfCurrentReads'
import WantToRead from './ShelfWantToRead'
import Read from './ShelfRead'
import Book from './Book.js'

class App extends Component {
  state = {
    query: '',
    shelf: ['currentlyReading', 'wantToRead', 'read'],
    books: []
  }
  componentDidMount(){
    BooksAPI.getBooks().then((books) => {
      this.setState({ books })
    })
  }

  getQuery(query) {
    this.setState({ query })
  }

  render() {
    return (
      <div className="App">
        <SearchBooks query={this.getQuery}>
        </SearchBooks>
        <CurrentReads books={this.state.books}></CurrentReads>
        <WantToRead books={this.state.books}></WantToRead>
        <Read books={this.state.books}></Read>
      </div>
    );
  }
}

export default App;
