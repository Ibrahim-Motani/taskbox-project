import React, { useState } from "react";
import axios from "axios";
import EditTask from "./EditTask";

const TaskItem = ({ id, title, status, removeItem, editItem }) => {
  const [toggle, setToggle] = useState(false);

  const handleRemove = id => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      axios
        .delete(`http://localhost:3033/api/tasks/${id}`)
        .then(response => {
          const result = response.data;
          removeItem(result.id);
        })
        .catch(error => {
          alert(error.message);
        });
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {toggle ? (
        <div>
          <EditTask id={id} title={title} status={status} editItem={editItem} handleToggle={handleToggle} />
          <button onClick={handleToggle}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <button onClick={handleToggle}>Edit</button>
          <button onClick={() => handleRemove(id)}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
