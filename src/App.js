import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import Shelves from './Shelves'

class App extends Component {
  state = {
    query: '',
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

  updateShelf = ( book, shelf ) => {
    BooksAPI.update( book, shelf ).then(res => {
      book.shelf = shelf
      let updateBooks = this.state.books.filter( book => book.id !== book.id)
      updateBooks.push(book)
      this.setState(state => ({ books: state.books.concat([updateBooks])
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBooks query={this.getQuery}>
        </SearchBooks>
        <Shelves books={this.state.books} updateShelf={this.updateShelf}></Shelves>
      </div>
    );
  }
}

export default App;
