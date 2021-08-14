import React from "react";
import PropTypes from "prop-types";
import BooksGrid from "../books/BooksGrid";

const SearchBooksResults = (props) => (
    <div className="search-books-results">
        {
            props.books.length && (
                <BooksGrid
                    books={props.books}
                    onChangeShelf={props.onChangeShelf}
                    shelfOptions={props.shelfOptions}
                />
            )
        }
    </div>
)

SearchBooksResults.propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired,
    books: PropTypes.any.isRequired
};

export default SearchBooksResults;