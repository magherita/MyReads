import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BooksGrid = (props) => (
    <ol className="books-grid">
        {
            props.books.length &&
            props.books.map(book => (
                <li key={book.id}>
                    <Book
                        book={book}
                        onUpdateBookShelf={props.onUpdateBookShelf}
                        getCurrentBookShelf={props.getCurrentBookShelf}
                    />
                </li>
            ))
        }
    </ol>
);

BooksGrid.propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
};

export default BooksGrid;