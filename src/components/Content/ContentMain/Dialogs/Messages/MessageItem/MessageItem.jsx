import React from 'react';
import s from './../Messages.module.css';



const MessageItem = React.memo((props) => {
	console.log('renderM');
	return (
		<div className={`${s['main-message-box']} ${s['ta-right']}`}>
			<div className={`${s['message-dt']}`}>
				<div className={s['message-inner-dt']}>
					<p>{props.lastMessage}</p>
				</div>
				<span>{props.date}</span>
			</div>
		</div>
	)
});

export default MessageItem;