import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BooksGrid = (props) => {
    const { books, onUpdateBookShelf, getCurrentBookShelf } = props;

    return (
        <ol className="books-grid">
            {
                books.length &&
                books.map(book => (
                    <li key={book.id}>
                        <Book
                            book={book}
                            onUpdateBookShelf={onUpdateBookShelf}
                            getCurrentBookShelf={getCurrentBookShelf}
                        />
                    </li>
                ))
            }
        </ol>
    );
};

BooksGrid.propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
};

export default BooksGrid;