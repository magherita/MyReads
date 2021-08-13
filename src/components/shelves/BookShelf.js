import React from "react";
import PropTypes from "prop-types";
import BooksGrid from "../books/BooksGrid";

const BookShelf = (props) => (
    <div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf.label}</h2>
            <div className="bookshelf-books">

                <BooksGrid
                    books={props.books}
                    shelfOptions={props.shelfOptions}
                    currentShelf={props.shelf.value}
                    onChangeShelf={props.onChangeShelf} />
            </div>
        </div>
    </div>
)

BookShelf.propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired,
    books: PropTypes.array,
    shelf: PropTypes.object.isRequired
};

export default BookShelf;