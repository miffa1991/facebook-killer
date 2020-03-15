import React, { useState } from 'react';


const ProfileStatusWithHook = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const activeEditMode = () => {
		setEditMode(true);
	}

	const deactiveEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const changeStatus = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
		<div>
			{
				!editMode &&
				< div >
					<span onDoubleClick={activeEditMode}>{props.status || '-----'}</span>
				</div>}
			{
				editMode &&
				<div>
					<input autoFocus={true} onChange={changeStatus} onBlur={deactiveEditMode} value={status} />
				</div>
			}
		</div >
	)


}

export default ProfileStatusWithHook;