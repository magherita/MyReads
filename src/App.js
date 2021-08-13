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
      { value: "read", label: "Read" },
      { value: "none", label: "None" },
    ],
    shelvedBooks: {
      "currentlyReading": [],
      "wantToRead": [],
      "read": [],
      "none": []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(bks => {
        this.setState({
          books: bks
        });
      })
  }

  onSearch = (searchTerm) => {
    BooksAPI.search(searchTerm)
      .then(books => {
        this.setState({
          books: books
        });
      }).catch(error => {
        this.setState({
          books: error.items
        });
      });
  }

  onChangeShelf = (book, currentShelf) => event => {
    const selectedShelf = event.target.value;
    const currentShelvedBooks = this.state.shelvedBooks;

    if (currentShelf === selectedShelf) {
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

      currentShelvedBooks[selectedShelf].push(book);
    } else {
      // remove book from current shelf
      currentShelvedBooks[currentShelf] = [...currentShelvedBooks[currentShelf].filter(bk => bk.id !== book.id)];
      // add book to selected shelf
      currentShelvedBooks[selectedShelf].push(book);
    }

    this.setState({
      shelvedBooks: currentShelvedBooks
    });
  }

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
    )
  }
}

export default BooksApp
