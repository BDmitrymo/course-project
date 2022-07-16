import React, {useState} from "react";
import API from "./api";
import Users from "./components/users";
import User from "./components/user";

//import SearchStatus from "./components/searchStatus";

const App = () => {
    const thsTable = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка']
    const [users, setUsers] = useState(API.users.fetchAll())
    const handleDelete = (id) => {
        setUsers(users.filter(user => user._id !== id))
    }

    return (
        <>
            <table className="table table-striped">
                <thead>
                <tr>
                    {thsTable.map(th => <th scope="col" key={th}>{th}</th>)}
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {<Users users={users} handleDelete={handleDelete}/>}
                </tbody>
            </table>
        </>
    )
}

export default App
