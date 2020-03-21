import React, { useState } from 'react';
import s from './Pagination.module.css';

const Pagination = ({ pageUserCount, pageLimit, pageCurrent, changeCurrentPage, portionSize = 10 }) => {

	let pageCount = Math.ceil(pageUserCount / pageLimit);

	let pages = [];
	for (let i = 1; i < pageCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pageCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className={s.pagination}>
			{portionNumber > 1 &&
				<button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => {
					return <div className={pageCurrent == p && s.activePage} onClick={() => { changeCurrentPage(p) }} >{p}</div>
				})}
			{portionCount > portionNumber &&
				<button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
		</div>
	)
}

export default Pagination;