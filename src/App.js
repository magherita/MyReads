import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router";
import SearchBooks from "./components/search/SearchBooks";
import BooksList from "./components/books/BooksList";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfOptions: [
      { value: "currentlyReading", label: "Currently Reading" },
      { value: "wantToRead", label: "Want to Read" },
      { value: "read", label: "Read" }
    ],
    shelvedBooks: {
      "currentlyReading": [],
      "wantToRead": [],
      "read": []
    }
  }

  onSearch = (searchTerm) => {
    BooksAPI.search(searchTerm)
      .then(books => {
        this.setState({
          books: books === undefined ? [] : books
        });
      }).catch(_ => {
        this.setState({
          books: []
        });
      });
  };

  onChangeShelf = (book, currentShelf) => event => {
    const selectedShelf = event.target.value;
    const currentShelvedBooks = this.state.shelvedBooks;

    // if selected shelf is same as book's current shelf
    // do nothing
    if (currentShelf === selectedShelf || selectedShelf === "none") {
      return;
    }

    if (currentShelf === undefined) {
      // check whether book is already shelved
      Object.keys(currentShelvedBooks).forEach(shelf => {
        if (currentShelvedBooks[shelf].filter(bk => bk.id === book.id).length > 0) {
          // remove book from current shelf
          currentShelvedBooks[shelf] = [...currentShelvedBooks[shelf].filter(bk => bk.id !== book.id)];
        }
      });
      // add book to selected shelf
      currentShelvedBooks[selectedShelf].push(book);
      // update book shelf via api
      // BooksAPI.update(book, selectedShelf)
      //   .then(data => console.log("Update " + data))
      //   .catch(error => console.log("error " + error));
    } else {
      // remove book from current shelf
      currentShelvedBooks[currentShelf] = [...currentShelvedBooks[currentShelf].filter(bk => bk.id !== book.id)];
      // add book to selected shelf
      currentShelvedBooks[selectedShelf].push(book);
      // update book shelf via api
      // BooksAPI.update(book, selectedShelf)
      //   .then(data => console.log("Update " + data))
      //   .catch(error => console.log("error " + error));
    }

    this.setState({
      shelvedBooks: currentShelvedBooks
    });
  };

  render() {
    const { books, shelfOptions, shelvedBooks } = this.state;

    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <BooksList
              onChangeShelf={this.onChangeShelf}
              books={books}
              shelfOptions={shelfOptions}
              shelvedBooks={shelvedBooks}
            />
          )}
        />

        <Route
          exact path="/search"
          render={() => (
            <SearchBooks
              onChangeShelf={this.onChangeShelf}
              books={books}
              shelfOptions={shelfOptions}
              onSearch={this.onSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp
