import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({
  formSubmit,
  isSaved,
  toggleIsSaved,
  id: slNo,
  title: tasktitle,
  status: taskStatus,
}) => {
  const [id, setId] = useState(slNo ? slNo : uuidv4());
  const [title, setTitle] = useState(tasktitle ? tasktitle : "");
  const [status, setStatus] = useState(taskStatus ? taskStatus : false);

  useEffect(() => {
    if (isSaved) {
      setId(uuidv4());
      setTitle("");
      setStatus(false);
      toggleIsSaved();
    }
  }, [isSaved]);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      id,
      title,
      status,
    };
    formSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label> <br />
        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />{" "}
        <br />
        <input
          type="checkbox"
          checked={status}
          onChange={event => setStatus(event.target.checked)}
        />{" "}
        <label>Completed</label> <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default TaskForm;
