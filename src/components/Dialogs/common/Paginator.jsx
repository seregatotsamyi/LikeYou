import React, {useState} from 'react';
import ArrowPaginator from "../../SVG/ArrowPaginator";


let Paginator = ({portionSize, ...props}) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <ul className="pagination__list">
            {portionNumber > 1 &&
                <li className="pagination__item _prev _arrow ">
                    <button className="pagination__link"
                            onClick={() => {
                                setPortionNumber(portionNumber - 1)
                            }}>
                        <ArrowPaginator/>
                    </button>
                </li>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <li key={p}
                            className={props.currentPage === p ? "pagination__item _active" : "pagination__item"}>
                            <button className="pagination__link"
                                    onClick={(e) => props.onPageChanged(p)}
                                    type="button">
                                {p}
                            </button>
                        </li>
                    )
                })}
            {
                portionCount > portionNumber &&
                <li className="pagination__item _next _arrow ">
                    <button className="pagination__link"
                            onClick={() => {
                                setPortionNumber(portionNumber + 1)
                            }}>
                        <ArrowPaginator/>
                    </button>
                </li>
            }
        </ul>
    )
}


export default Paginator;