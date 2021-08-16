import React from "react";
import PropTypes from "prop-types";
import BooksGrid from "../books/BooksGrid";

const BookShelf = (props) => {
    const { shelf, shelvedBooks, onUpdateBookShelf, getCurrentBookShelf } = props;

    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.label}</h2>
                <div className="bookshelf-books">
                    <BooksGrid
                        books={shelvedBooks[shelf.value]}
                        onUpdateBookShelf={onUpdateBookShelf}
                        getCurrentBookShelf={getCurrentBookShelf}
                    />
                </div>
            </div>
        </div>
    );
};

BookShelf.propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    shelvedBooks: PropTypes.object.isRequired,
    shelf: PropTypes.object.isRequired
};

export default BookShelf;