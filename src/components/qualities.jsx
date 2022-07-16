import React from "react";

const Qualities = ({ name, color }) => {
    return <span className={`badge bg-${color} m-1`}>{name}</span>
}

export default Qualities