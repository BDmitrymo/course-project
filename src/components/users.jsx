import React, {useState} from "react";
import User from "./user";
import Pagination from "./pagination";

const Users = ({users, handleDelete, handleToggleBookmark}) => {
    const thsTable = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', 'Избранное']
    const count = users.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const handlerPageChang = (pageIndex) => {
        setCurrentPage(pageIndex)
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
                {users.map((user) => (
                    <User key={user._id}
                          {...user}
                          handleDelete={handleDelete}
                          handleToggleBookmark={handleToggleBookmark}/>))}
                </tbody>
            </table>
            <Pagination itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChang={handlerPageChang}/>
        </>
    )
}

export default Users
