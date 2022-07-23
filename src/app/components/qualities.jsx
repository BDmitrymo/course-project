import React from "react";
import PropTypes from "prop-types";

const Qualities = ({ name, color }) => {
    return <span className={`badge bg-${color} m-1`}>{name}</span>;
};

Qualities.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Qualities;
