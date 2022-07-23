import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChang, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1);

    if (pageCount === 1) return null;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={`page-item ${
                            page === currentPage ? "active" : ""
                        }`}
                        key={`page_${page}`}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChang(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChang: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
