import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks.js'
import Book from './Book.js'
import CurrentReads from './CurrentReads'
import WantToRead from './WantToRead'
import Read from './Read'

class App extends Component {
  state = {
    query: '',
    books: [],
    current: [],
    want: [],
    read: []
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
    const books = this.props.books
    return (
      <div className="App">
        <SearchBooks query={this.getQuery}>
        </SearchBooks>
        <CurrentReads></CurrentReads>
        <WantToRead></WantToRead>
        <Read></Read>
        <Book book={this.state.books}></Book>
        <Book book={this.state.books}></Book>
        <Book book={this.state.books}></Book>
      </div>
    );
  }
}

export default App;
