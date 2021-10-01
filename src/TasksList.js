import React from "react";
import TaskItem from "./TaskItem";

const TasksList = ({ tasks, removeItem, editItem }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <div>
          <h2>No Tasks found</h2>
          <p>Add your first task</p>
        </div>
      ) : (
        <div>
          <h2>My Tasks - {tasks.length}</h2>
          {tasks.map(task => {
            return (
              <TaskItem
                editItem={editItem}
                removeItem={removeItem}
                key={task.id}
                {...task}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TasksList;
