import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookOpen} from '@fortawesome/free-solid-svg-icons'
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
    shelves: '',
  }
  componentDidMount() {
    BooksAPI.getBooks().then((books) => {
      this.setState({books})
      let getShelves = this.state.books.map((book) => book.shelf)
      let getBookId = this.state.books.map((book) => book.id)
      let getShelvesId = getShelves.map(function (shelf, i) { return [shelf, getBookId[i]]})
      let getCurrentlyReading = getShelvesId.filter((item) => item[0] === "currentlyReading")
      let getRead = getShelvesId.filter((item) => item[0] === "read")
      let getWantToRead = getShelvesId.filter((item) => item[0] === "wantToRead")
      let currentlyReading = getCurrentlyReading.map((item) => item[1])
      let read = getRead.map((item) => item[1])
      let wantToRead = getWantToRead.map((item) => item[1])
      let shelvesOnLoad = {'currentlyReading': currentlyReading, 'wantToRead': wantToRead, 'read' : read}
      this.setState(state => ({shelves: shelvesOnLoad}))
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
      console.log(res)
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((res) => {
      this.setState(state => ({queriedBooks: res}))
    })
  }

  render() {
    return (<div className="App">
      <Route path="/search" render={() => (<SearchBooks query={this.getQuery} onSearch={this.searchBooks} queriedBooks={this.state.queriedBooks} books={this.state.books} updateShelf={this.updateShelf} shelves={this.state.shelves} onNavigate={() => {
            this.setState({screen: 'bookshelf'})
          }}/>)}/>
        <Route exact path="/" render={() => (<Shelves books={this.state.books} updateShelf={this.updateShelf} shelves={this.state.shelves} shelf={this.state.shelf} onNavigate={() => {
            this.setState({screen: 'search'})
          }}/>)}/>
    </div>);
  }
}

export default App;
