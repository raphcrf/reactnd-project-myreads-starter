import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookList from './components/BookList'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (id, shelf) => {
    BooksAPI.update({ id }, shelf).then((response) => {
      console.log(response)
      this.fetchBooks()
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />
        <Route path="/search" render={()=>(
          <Search changeShelf={this.changeShelf}/>
        )} />


      </div>
    )
  }
}

export default BooksApp
