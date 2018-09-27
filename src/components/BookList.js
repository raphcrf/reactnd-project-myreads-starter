import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelves from './Shelves'

export default class BookList extends Component {

    state = {

        
        shelves:[

            {
                name: 'currentlyReading',
                header: 'Currently Reading'
            },
            {
                name: 'wantToRead',
                header: 'Want to Read'
            },
            {
                name: 'read',
                header: 'Read'
            }

        ]
    }


    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {
                                this.state.shelves.map((shelf, index) => (
                                    <Shelves
                                        title={shelf.header}
                                        key={index}
                                        books={this.props.books.filter((book) => (
                                            shelf.name === book.shelf
                                        ))}
                                        changeShelf={this.props.changeShelf}
                                    />
                                ))
                            }
                            {console.log(this.state.books)}
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
            </div>

        )
    }
}