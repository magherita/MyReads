import React from "react";
import PropTypes from "prop-types";
import BooksGrid from "../books/BooksGrid";

const BookShelf = (props) => (
    <div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf.label}</h2>
            <div className="bookshelf-books">
                <BooksGrid
                    books={props.shelvedBooks[props.shelf.value]}
                    onUpdateBookShelf={props.onUpdateBookShelf}
                    getCurrentBookShelf={props.getCurrentBookShelf}
                />
            </div>
        </div>
    </div>
);

BookShelf.propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    shelvedBooks: PropTypes.object.isRequired,
    shelf: PropTypes.object.isRequired
};

export default BookShelf;