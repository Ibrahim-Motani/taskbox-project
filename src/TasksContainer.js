import React, { useState, useEffect } from "react";
import TasksList from "./TasksList";
import axios from 'axios';
import AddTask from "./AddTask";

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3033/api/tasks')
            .then((response) => {
                const result = response.data;
                setTasks(result);
            }) // success
            .catch((error) => {
                alert(error.message);
            });
    }, []);

    const addItem = task => {
        setTasks([...tasks, task]);
    };

    const removeItem = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };
  
  const editItem = task => {
    const result = tasks.map(t => {
      if (t.id === task.id) {
        return { ...t, ...task };
      }
      else {
        return { ...t };
      }
    });
    setTasks(result);
  };

  return (
    <div>
          <TasksList editItem={editItem} removeItem={removeItem} tasks={tasks}/>
          <AddTask addItem={addItem} />
    </div>
  );
};

export default TasksContainer;
