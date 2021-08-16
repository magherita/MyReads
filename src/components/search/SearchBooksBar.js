import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

class SearchBooksBar extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    state = {
        searchTerm: ""
    };

    handleSearch = event => {
        this.setState({
            searchTerm: event.target.value
        });
        this.props.onSearch(event.target.value);
    };

    handleClose = () => {
        const { history } = this.props;
        history.push("/");
    };

    render() {
        const { searchTerm } = this.state;

        return (
            <div className="search-books-bar">
                <Link
                    to="/"
                    className="close-search"
                    onClick={this.handleClose}
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={searchTerm}
                        onChange={this.handleSearch}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(SearchBooksBar);