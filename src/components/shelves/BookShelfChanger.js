import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = (props) => (
    <div className="book-shelf-changer">
        <select
            onChange={props.onChangeShelf(props.book, props.currentShelf)}
            defaultValue="move"
        >
            <option value="move" disabled>Move to...</option>
            {props.shelfOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    </div>
);

BookShelfChanger.propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    shelfOptions: PropTypes.array.isRequired,
    book: PropTypes.any.isRequired,
    currentShelf: PropTypes.string
};

export default BookShelfChanger;