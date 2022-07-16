import React from "react";
import User from "./user";

const Users = (props) => {
    console.log('props', props)
    return (
        props.users.map(user => (
            console.log(user)

        ))
    )
}

export default Users
