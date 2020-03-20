import React from 'react';
import s from './Pagination.module.css';

const Pagination = (props) => {

	let pageCount = Math.ceil(props.pageUserCount / props.pageLimit);
	let pages = [];
	for (let i = 1; i < pageCount; i++) {
		pages.push(i);
	}
	return (
		<div className={s.pagination}>
			{pages.map(p => {
				return <div className={props.pageCurrent == p && s.activePage} onClick={() => { props.changeCurrentPage(p) }} >{p}</div>
			})}
		</div>
	)
}

export default Pagination;