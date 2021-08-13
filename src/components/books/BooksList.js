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
                props.shelfOptions.map(shelf => (
                    <BookShelf
                        key={shelf.value}
                        onChangeShelf={props.onChangeShelf}
                        books={props.shelvedBooks[shelf.value]}
                        shelf={shelf}
                        shelfOptions={props.shelfOptions}
                    />
                ))
            }
        </div>
        <OpenSearch />
    </div>
)

BooksList.propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    shelvedBooks: PropTypes.object.isRequired
};

export default BooksList;