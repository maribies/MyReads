import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import Shelves from './Shelves'

library.add(faBookOpen)

class App extends Component {
  state = {
    query: '',
    books: [],
    screen: 'bookshelf',
    queriedBooks: [],
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
      this.setState(state => ({ books: state.books.concat([updateBooks[0]])
      }))
    })
  }
  // search the books
  searchBooks = (query) => {
    BooksAPI.search( query ).then(res => {
      this.setState(state => ({ queriedBooks: res}))
    })
  }

  render() {
    return (
      <div className="App">
        <Route path="/search" render={() => (
          <SearchBooks
            query={this.getQuery}
            onSearch={this.searchBooks}
            queriedBooks={this.state.queriedBooks}
            books={this.state.books}
            updateShelf={this.updateShelf}
            onNavigate={() => {
                this.setState({ screen : 'bookshelf'})
            }}
          />

        )}/>
        <Route exact path="/" render={() => (
          <Shelves
            books={this.state.books}
            updateShelf={this.updateShelf}
            onNavigate={() => {
                this.setState({ screen : 'search'})
            }}
          />
        )}/>
      </div>
    );
  }
}

export default App;
