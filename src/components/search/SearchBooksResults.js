import React from "react";
import PropTypes from "prop-types";
import BooksGrid from "../books/BooksGrid";

const SearchBooksResults = (props) => (
    <div className="search-books-results">
        {
            props.books.length && (
                <BooksGrid
                    books={props.books}
                    onUpdateBookShelf={props.onUpdateBookShelf}
                    getCurrentBookShelf={props.getCurrentBookShelf}
                />
            )
        }
    </div>
);

SearchBooksResults.propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};

export default SearchBooksResults;