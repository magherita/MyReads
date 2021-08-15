import React from "react";
import PropTypes from "prop-types";
import BookShelf from "../shelves/BookShelf";
import OpenSearch from "../search/OpenSearch";

const BooksList = (props) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            {
                props.shelves.map(shelf => (
                    <BookShelf
                        key={shelf.value}
                        onUpdateBookShelf={props.onUpdateBookShelf}
                        getCurrentBookShelf={props.getCurrentBookShelf}
                        shelvedBooks={props.shelvedBooks}
                        shelf={shelf}
                    />
                ))
            }
        </div>
        <OpenSearch />
    </div>
);

BooksList.propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    shelvedBooks: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired
};

export default BooksList;