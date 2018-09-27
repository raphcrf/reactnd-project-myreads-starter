import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'


export default class Search extends Component{


    state={
        query:'',
        books:[],
        error:false
    }

    

    searchBooks = (event)=>{
        const query = event.target.value.trim()
        this.setState({query})

        if(query){
            BooksAPI.search(query, 20).then((books)=>{
                books.length > 0 ? (this.setState({books, error:false})) : (this.setState({books:[], error:true}))
            })
        }
    }

    // onChangeShelf = (id, shelf)=>{
    //     this.props.changeShelf(id, shelf)
    //     this.searchBooks(this.state.query)
    // }

    render(){
        return(
            <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search" >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input 
                            value={this.state.query}  
                            type="text" 
                            placeholder="Search by title or author" 
                            onChange={this.searchBooks}
                            />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        {console.log(this.state.books)}
                        { this.state.books.length > 0 && (
                            
                            this.state.books.map((book)=>(
                                
                                <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                                        
                                        <div className="book-shelf-changer">
                                            <select onChange={(event)=>{this.props.changeShelf(book.id, event.target.value)}}  >
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                            ))
                        )}
                        {this.state.error && (
                            <div>
                                <li>Nothing Found!</li>
                            </div>
                        )}
                        
                        </ol>
                    </div>
                </div>
        )
    }
}