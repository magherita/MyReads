import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "../shelves/BookShelfChanger";

const Book = (props) => {
    const { book, onUpdateBookShelf, getCurrentBookShelf } = props;

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 188,
                        backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
                    }}>
                </div>
    
                <BookShelfChanger
                    onUpdateBookShelf={onUpdateBookShelf}
                    getCurrentBookShelf={getCurrentBookShelf}
                    book={book}
                />
    
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors || ""}</div>
        </div>
    );
};

Book.propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired,
    getCurrentBookShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
};

export default Book;