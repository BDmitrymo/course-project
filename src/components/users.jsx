import React, {useState} from "react";
import API from "../api";

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    const [numberUsers, setNumberUsers] = useState(users.length)
    const thsTable = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка']
    const isUsers = numberUsers > 0

    const renderUserQualities = (qualities) => {
        return qualities.map(item => {
            const classes = `badge m-1 bg-${item.color}`
            return <span key={item._id} className={classes}>{item.name}</span>
        })
    }
    const handleDelete = (id) => {
        setUsers(prevState => prevState.filter(user => user._id !== id))
        setNumberUsers(numberUsers - 1)
    }
    const renderUsers = () => {
        return (
            users.map(user => {
                return (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{renderUserQualities(user.qualities)}</td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>delete</button>
                        </td>
                    </tr>
                )
            })
        )
    }
    const renderNumberUsers = (data) => {
        const classes = `d-inline-block ${data.color} m-3 p-3 h3 text-light`
        return <span className={classes}>{numberUsers ? numberUsers : ''} {data.title}</span>
    }

    return (
        isUsers
            ?
                <>
                    {renderNumberUsers({title: 'человек тусуется с тобой сегодня', color: 'bg-primary'})}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                {thsTable.map(th => <th scope="col" key={th}>{th}</th>)}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderUsers()}
                        </tbody>
                    </table>
                </>
            : renderNumberUsers({title: 'Никто с тобой не тусанет', color: 'bg-danger'})
    )
}

export default Users
