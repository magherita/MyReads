import React from "react";
import PropTypes from "prop-types";
import SearchBooksBar from "./SearchBooksBar";
import SearchBooksResults from "./SearchBooksResults";

const SearchBooks = (props) => {
    const { onSearch, books, onUpdateBookShelf, getCurrentBookShelf } = props;

    return (
        <div className="search-books">
            <SearchBooksBar
                onSearch={onSearch}
            />
            {
                books.length &&
                (
                    <SearchBooksResults
                        books={books}
                        onUpdateBookShelf={onUpdateBookShelf}
                        getCurrentBookShelf={getCurrentBookShelf}
                    />
                )
            }
        </div>
    );
};

SearchBooks.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};

export default SearchBooks;