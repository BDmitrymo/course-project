import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const titleTable = {
        success: {
            title: "человек тусуется с тобой сегодня",
            color: "bg-primary"
        },
        danger: { title: "Никто с тобой не тусанет", color: "bg-danger" }
    };
    const isUsers = length > 0;
    const status = isUsers ? "success" : "danger";
    const { color, title } = titleTable[status];
    const classes = `d-inline-block ${color} m-3 p-3 h3 text-light`;

    return (
        <span className={classes}>
            {length ? length : ""} {title}
        </span>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
}

export default SearchStatus;
