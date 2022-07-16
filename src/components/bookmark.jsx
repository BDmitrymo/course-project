import React from "react";

const Bookmark = ({ favourites }) => {
    return favourites ? <i className="bi bi-bookmark-check-fill" /> : <i className="bi bi-bookmark" />
}

export default Bookmark