import React from "react";

const SearchStatus = ({ length }) => {
    const titleTable = {
        success: {title: 'человек тусуется с тобой сегодня', color: 'bg-primary'},
        danger: {title: 'Никто с тобой не тусанет', color: 'bg-danger'}
    }
    const {color, title} = titleTable[key]
    const classes = `d-inline-block ${color} m-3 p-3 h3 text-light`
    return (
        <span className={classes}>{length ? length : ''} {title}</span>
    )
}

export default SearchStatus