import React from "react";
import PropTypes from "prop-types";
import BooksGrid from "../books/BooksGrid";

const SearchBooksResults = (props) => {
    const { books, onUpdateBookShelf, getCurrentBookShelf } = props;

    return (
        <div className="search-books-results">
            {
                books.length && (
                    <BooksGrid
                        books={books}
                        onUpdateBookShelf={onUpdateBookShelf}
                        getCurrentBookShelf={getCurrentBookShelf}
                    />
                )
            }
        </div>
    );
};

SearchBooksResults.propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};

export default SearchBooksResults;