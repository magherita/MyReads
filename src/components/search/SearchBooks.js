import React from "react";
import PropTypes from "prop-types";
import SearchBooksBar from "./SearchBooksBar";
import SearchBooksResults from "./SearchBooksResults";

const SearchBooks = (props) => (
    <div className="search-books">
        <SearchBooksBar
            onSearch={props.onSearch}
        />
        <SearchBooksResults
            books={props.books}
            onChangeShelf={props.onChangeShelf}
            shelfOptions={props.shelfOptions}
        />
    </div>
)

SearchBooks.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired
};

export default SearchBooks;