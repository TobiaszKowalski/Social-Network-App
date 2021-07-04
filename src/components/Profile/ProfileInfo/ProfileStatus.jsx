import React, { useState } from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = e => setStatus(e.target.value);

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )  
};

export default ProfileStatus;