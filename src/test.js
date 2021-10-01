import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ formSubmit }) => {
  // avoiding state variable for id
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      // generating new id only when form data is being submitted
      id: uuidv4(),
      title,
      status,
    };
    formSubmit(formData);

    // resetting form values after form submission
    setStatus(false);
    setTitle("");
  };

    return (
        <div>
        {/* same jsx code no difference */}
        </div>
    );
};

export default TaskForm;
