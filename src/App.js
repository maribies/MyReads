import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookOpen} from '@fortawesome/free-solid-svg-icons'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import Shelves from './Shelves'
import SearchButton from './SearchButton'

library.add(faBookOpen)

class App extends Component {
  state = {
    query: '',
    books: [],
    screen: 'bookshelf',
    queriedBooks: [],
    showError: false,
  }
  componentDidMount() {
    BooksAPI.getBooks().then((books) => {
      this.setState({books})
    })
    .catch(error => {
      this.setState({
        showError: true
      })
    })
  }

  getQuery(query) {
    this.setState({query})
  }

  updateShelf = (updateBook, updateShelf) => {
    updateBook.shelf = updateShelf
    this.setState(state => ({book: {shelf: updateShelf}}))
    let newBooks = this.state.books.filter((book) => book.id !== updateBook.id)
    if (newBooks.length > 0) {
      newBooks.push(updateBook)
    }
    this.setState(state => ({books: newBooks}))
    BooksAPI.update(updateBook, updateShelf).then((res) => {
      this.setState(state => ({shelves: res}))
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((res) => {
      this.setState(state => ({queriedBooks: res}))
    })
  }

  changeScreen = screen => {
    if (screen !== this.state.screen) {
      this.setState({ screen })
    }
    return;
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
            getId={this.getId}
            onNavigate={() => this.changeScreen('bookshelf')}
          />
        )}/>
        <Route exact path="/" render={() => (
          <div className="contain-books">
            <h1 className='title'>MyReads Library</h1>
            <SearchButton></SearchButton>
            <Shelves
              books={this.state.books}
              updateShelf={this.updateShelf}
              shelf={this.state.shelf}
              onNavigate={() => this.changeScreen('search')}
            />
          </div>
        )}/>
    </div>);
  }
}

export default App;
