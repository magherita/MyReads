import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router";
import SearchBooks from "./components/search/SearchBooks";
import BooksList from "./components/books/BooksList";

class BooksApp extends React.Component {
  state = {
    searchedBooks: [],
    shelves: [
      { value: "currentlyReading", label: "Currently Reading" },
      { value: "wantToRead", label: "Want to Read" },
      { value: "read", label: "Read" }
    ],
    shelvedBooks: {
      "currentlyReading": [],
      "wantToRead": [],
      "read": []
    }
  };

  componentDidMount() {
    this.getShelvedBooks();
  }

  onSearch = (searchTerm) => {
    if(searchTerm === ""){
      this.setState({
        searchedBooks: []
      });
    } else{
      BooksAPI.search(searchTerm)
      .then(books => {
        this.setState({
          searchedBooks: Array.isArray(books) ? books : []
        });
      }).catch(_ => {
        this.setState({
          searchedBooks: []
        });
      });
    }    
  };

  onUpdateBookShelf = (book, selectedShelf) => {
    BooksAPI.update(book, selectedShelf)
      .then(_ => {
        book.shelf = selectedShelf;        
        const {shelves, shelvedBooks} = this.state;
        const updatedShelvedBooks = shelvedBooks;
        shelves.forEach((shelf, _, __) => {
          const books = updatedShelvedBooks[shelf.value];
          if(books.filter(bk => bk.id === book.id).length > 0){
            updatedShelvedBooks[shelf.value] = books.filter(bk => bk.id !== book.id);
            return;
          }
        });
        if(selectedShelf !== "none"){
          updatedShelvedBooks[selectedShelf] = updatedShelvedBooks[selectedShelf].concat(book);
        }
        this.setState({
          shelvedBooks: updatedShelvedBooks
        });
      }).catch(_ => {
        // do nothing
      });
  };

  getShelvedBooks = () => {
    BooksAPI.getAll().then(books => {
      const shelvedBooks = {};
      this.state.shelves.forEach((shelf, _, __) => {
        shelvedBooks[shelf.value] = books.filter(bk => bk.shelf === shelf.value);
      });
      this.setState({
        shelvedBooks: shelvedBooks
      });
    }).catch(_ => {
    });
  };

  getCurrentBookShelf = (book) => {
    const { shelves, shelvedBooks } = this.state;
    let shelfValue = "none";
    shelves.forEach((shelf, _, __) => {
      const books = shelvedBooks[shelf.value];
      if (books.filter(bk => bk.id === book.id).length > 0) {
        shelfValue = shelf.value;
        return;
      }
    });
    return shelfValue;
  };

  render() {
    const { searchedBooks, shelves, shelvedBooks } = this.state;

    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <BooksList
              onUpdateBookShelf={this.onUpdateBookShelf}
              getCurrentBookShelf={this.getCurrentBookShelf}
              shelvedBooks={shelvedBooks}
              shelves={shelves}
            />
          )}
        />

        <Route
          exact path="/search"
          render={() => (
            <SearchBooks
              onUpdateBookShelf={this.onUpdateBookShelf}
              getCurrentBookShelf={this.getCurrentBookShelf}
              books={searchedBooks}
              onSearch={this.onSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp
