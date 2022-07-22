import React, {useState} from "react";
import API from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDelete = (id) => {
        setUsers(users.filter(user => user._id !== id))
    }

    const handleToggleBookmark = (id) => {
        const newUsers = users.map(user => {
            if (user._id === id) user.favourites = !user?.favourites
            return user
        })
        setUsers(newUsers)
    }

    return (
        <>
            {<SearchStatus length={users.length}/>}
            {<Users users={users}
                    handleDelete={handleDelete}
                    handleToggleBookmark={handleToggleBookmark}/>}
        </>
    )
}

export default App
