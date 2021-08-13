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
                onChangeShelf={props.onChangeShelf}
                shelfOptions={props.shelfOptions}
                book={props.book}
                currentShelf={props.currentShelf}
            />

        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
    </div>
)

Book.propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    currentShelf: PropTypes.string
};

export default Book;