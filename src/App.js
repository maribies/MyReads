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
    const books = [
      { title: "The Fountainhead", author: "Ayn Rand", cover: "https://via.placeholder.com/96x160", bookId: "1"},
      { title: "Atlas Shrugged", author: "Ayn Rand", cover: "https://via.placeholder.com/96x160", bookId: "2"},
      { title: "Harry Potter and the Philsophers Stone", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "3"},
      { title: "Emotional Design", author: "Don Norman", cover: "https://via.placeholder.com/96x160", bookId: "4"},
    ]
    return (
      <div className="App">
        <SearchBooks query={this.getQuery}>
        </SearchBooks>
        <CurrentReads></CurrentReads>
        <WantToRead></WantToRead>
        <Read></Read>
      </div>
    );
  }
}

export default App;
