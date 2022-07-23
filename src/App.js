import React, { useState } from "react";
import API from "./app/api";
import Users from "./app/components/users";
import SearchStatus from "./app/components/searchStatus";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handleToggleBookmark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) user.favourites = !user?.favourites;
            return user;
        });
        setUsers(newUsers);
    };

    return (
        <>
            {<SearchStatus length={users.length} />}
            {
                <Users
                    users={users}
                    handleDelete={handleDelete}
                    handleToggleBookmark={handleToggleBookmark}
                />
            }
        </>
    );
};

export default App;
