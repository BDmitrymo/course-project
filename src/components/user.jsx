import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";

const User = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>
                {props.qualities.map(qual => (
                    <Qualities key={qual._id} {...qual} />
                ))}
            </td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}/5</td>
            <td>
                <button
                    className='btn'
                    onClick={() => props.handleToggleBookmark(props._id)}
                ><Bookmark favourites={props?.favourites} /></button>
            </td>
            <td>
                <button
                    className='btn btn-sm btn-danger'
                    onClick={() => props.handleDelete(props._id)}
                >delete</button>
            </td>
        </tr>
    )
}

export default User