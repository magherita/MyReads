import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "../shelves/BookShelfChanger";

const Book = (props) => (
    <div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 188,
                    backgroundImage: `url(${props.book.imageLinks && props.book.imageLinks.thumbnail})`
                }}>
            </div>

            <BookShelfChanger
                onUpdateBookShelf={props.onUpdateBookShelf}
                getCurrentBookShelf={props.getCurrentBookShelf}
                book={props.book}
            />

        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors || ""}</div>
    </div>
);

Book.propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
};

export default Book;