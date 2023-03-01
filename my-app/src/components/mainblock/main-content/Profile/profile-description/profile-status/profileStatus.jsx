import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  let activeEditStatus = () => {
    setEditMode(true);
  };
  let deactiveEditStatus = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onClick={activeEditStatus}>{props.status || "-------"}</span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactiveEditStatus}
            type="text"
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;