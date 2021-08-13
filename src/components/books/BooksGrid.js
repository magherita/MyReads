import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BooksGrid = (props) => (
    <ol className="books-grid">
        {props.books && props.books.map(book => (
            <li key={book.id}>
                <Book
                    book={book}
                    shelfOptions={props.shelfOptions}
                    currentShelf={props.currentShelf}
                    onChangeShelf={props.onChangeShelf}
                />
            </li>
        ))}
    </ol>
)

BooksGrid.propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired,
    books: PropTypes.array,
    currentShelf: PropTypes.string
};

export default BooksGrid;