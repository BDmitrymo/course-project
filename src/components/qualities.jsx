import React from "react";

const Qualities = (qualities) => {
    return (
        qualities.map(item => {
            const classes = `badge m-1 bg-${item.color}`
            return <span key={item._id} className={classes}>{item.name}</span>
        })
    )
}

export default Qualities