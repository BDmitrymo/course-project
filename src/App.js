import React, {useState} from "react";
import API from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
    const thsTable = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', 'Избранное']
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
            <table className="table table-striped">
                <thead>
                <tr>
                    {thsTable.map(th => <th scope="col" key={th}>{th}</th>)}
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {<Users users={users}
                        handleDelete={handleDelete}
                        handleToggleBookmark={handleToggleBookmark}/>}
                </tbody>
            </table>
        </>
    )
}

export default App
