import React from "react";
import PropTypes from "prop-types";

class BookShelfChanger extends React.Component {
    static propTypes = {
        onUpdateBookShelf: PropTypes.func.isRequired,
        getCurrentBookShelf: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired,
    };

    state = {
        selectedShelf: this.props.getCurrentBookShelf(this.props.book)
    };

    handleSelect = event => {
        this.setState({
            selectedShelf: event.target.value
        });
        this.updateBookShelf(event.target.value);
    };

    updateBookShelf = (selectedShelf) => {
        this.props.onUpdateBookShelf(this.props.book, selectedShelf);
    };

    render() {
        const { selectedShelf } = this.state;
        const shelves = [
            { value: "currentlyReading", label: "Currently Reading" },
            { value: "wantToRead", label: "Want to Read" },
            { value: "read", label: "Read" },
            { value: "none", label: "None" },
        ];

        return (
            <div className="book-shelf-changer">
                <select
                    value={selectedShelf}
                    onChange={this.handleSelect}
                >
                    <option value="move" disabled>Move to...</option>
                    {shelves.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;