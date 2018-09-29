import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks.js'

class App extends Component {

  componentDidMount(){
    BooksAPI.getBooks().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    const books = this.props.books
    return (
      <div className="App">
        <SearchBooks books=''>
        </SearchBooks>
      </div>
    );
  }
}

export default App;
