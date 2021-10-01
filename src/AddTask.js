import React, {useState} from 'react';
import TaskForm from './TaskForm';
import axios from 'axios';

const AddTask = ({ addItem }) => {
    const [isSaved, setIsSaved] = useState(false);

    const formSubmit = (task) => {
        axios.post('http://localhost:3033/api/tasks', task)
            .then(response => {
                const result = response.data;
                console.log(result);
                addItem(result);
                setIsSaved(true);
            }) // success
            .catch(error => {
                alert(error.message);
            }); // error   
    };

    const toggleIsSaved = () => {
        setIsSaved(false);
    };

    return (
      <div>
        <h2>Add Task</h2>
        <TaskForm
          formSubmit={formSubmit}
          isSaved={isSaved}
          toggleIsSaved={toggleIsSaved}
        />
      </div>
    );
}

export default AddTask;
