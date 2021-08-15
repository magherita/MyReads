import React from "react";
import PropTypes from "prop-types";
import SearchBooksBar from "./SearchBooksBar";
import SearchBooksResults from "./SearchBooksResults";

const SearchBooks = (props) => (
    <div className="search-books">
        <SearchBooksBar
            onSearch={props.onSearch}
        />
        {
            props.books.length &&
            (
                <SearchBooksResults
                    books={props.books}
                    onUpdateBookShelf={props.onUpdateBookShelf}
                    getCurrentBookShelf={props.getCurrentBookShelf}
                />
            )
        }
    </div>
);

SearchBooks.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};

export default SearchBooks;