import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ favourites }) => {
    return favourites ? (
        <i className="bi bi-bookmark-check-fill" />
    ) : (
        <i className="bi bi-bookmark" />
    );
};

Bookmark.propTypes = {
    favourites: PropTypes.bool
}

export default Bookmark;
