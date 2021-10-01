import React from "react";
import TaskForm from "./TaskForm";
import axios from "axios";

const EditTask = ({ id, title, status, editItem, handleToggle }) => {
  const formSubmit = task => {
    axios
      .put(`http://localhost:3033/api/tasks/${task.id}`, task)
      .then(response => {
        const result = response.data;
          editItem(result);
          handleToggle();
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <TaskForm id={id} title={title} status={status} formSubmit={formSubmit} />
    </div>
  );
};

export default EditTask;
