import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>
                {props.qualities.map((qual) => (
                    <Qualities key={qual._id} {...qual} />
                ))}
            </td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}/5</td>
            <td>
                <button
                    className="btn"
                    onClick={() => props.handleToggleBookmark(props._id)}
                >
                    <Bookmark favourites={props?.favourites} />
                </button>
            </td>
            <td>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => props.handleDelete(props._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    handleToggleBookmark: PropTypes.func.isRequired,
    favourites: PropTypes.bool.isRequired,
    handleDelete: PropTypes.func.isRequired,
    _id: PropTypes.number.isRequired,
}

export default User;
