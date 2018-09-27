import React, { Component } from 'react'
import Book from './Book'


export default class Shelves extends Component {



    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map((book)=>(
                        <Book 
                        book={book}
                        key={book.id}
                        title={book.title}
                        imgUrl={book.imageLinks.smallThumbnail || book.imageLinks.thumbnail}
                        authors={book.authors}
                        id={book.id}
                        shelf={book.shelf}
                        changeShelf={this.props.changeShelf}
                        />
                    ))}
                        
                    </ol>
                </div>
            </div>
            
        )
    }
}