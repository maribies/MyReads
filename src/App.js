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
      { title: "The Fountainhead", author: "Ayn Rand", cover: "https://via.placeholder.com/96x160", bookId: 1},
      { title: "Atlas Shrugged", author: "Ayn Rand", cover: "https://via.placeholder.com/96x160", bookId: 2},
      { title: "Guns, Germs, and Steel", author: "Jared Diamond", cover: "https://via.placeholder.com/96x160", bookId: "3"},
      { title: "Emotional Design", author: "Don Norman", cover: "https://via.placeholder.com/96x160", bookId: "4"},
      { title: "The Design of Everyday Things", author: "Don Norman", cover: "https://via.placeholder.com/96x160", bookId: "5"},
      { title: "Harry Potter and the Philsophers Stone", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "6"},
      { title: "Harry Potter and the Chamber of Secrets", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "7"},
      { title: "Harry Potter and the Prisoner of Azkaban", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "8"},
      { title: "Harry Potter and the Goblet of Fire", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "9"},
      { title: "Harry Potter and the Order of the Phoenix", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "10"},
      { title: "Harry Potter and the Half Blood Prince", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "11"},
      { title: "Harry Potter and the Deathly Hallows", author: "JK Rowling", cover: "https://via.placeholder.com/96x160", bookId: "12"},
    ]
    return (
      <div className="App">
        <SearchBooks query={this.getQuery}>
        </SearchBooks>
        <CurrentReads books={books}></CurrentReads>
        <WantToRead books={books}></WantToRead>
        <Read books={books}></Read>
      </div>
    );
  }
}

export default App;
