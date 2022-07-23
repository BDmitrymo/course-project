import React, {useState} from "react";
import User from "./user";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({users, handleDelete, handleToggleBookmark}) => {
    const thsTable = [
        "Имя",
        "Качества",
        "Профессия",
        "Встретился, раз",
        "Оценка",
        "Избранное"
    ];
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlerPageChang = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {thsTable.map((th) => (
                            <th scope="col" key={th}>
                                {th}
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {userCrop.map((user) => (
                        <User
                            key={user._id}
                            {...user}
                            handleDelete={handleDelete}
                            handleToggleBookmark={handleToggleBookmark}
                        />
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChang={handlerPageChang}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggleBookmark: PropTypes.func.isRequired
}

export default Users;
