import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks.js'
import CurrentReads from './CurrentReads'
import WantToRead from './WantToRead'
import Read from './Read'

class App extends Component {
  state = {
    query: '',
    shelf: [],
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
