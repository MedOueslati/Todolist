// Import React, the 'useState' hook, and specific hooks from 'react-redux'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import action creators for Redux actions
import { toggleTask, editTask, deleteTask } from '../redux/actions';

// Import the Task component
import Task from './Task';

// Import the Bootstrap Button component
import { Button } from 'react-bootstrap';

// Functional component representing a list of tasks
const ListTask = () => {
  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Access the 'tasks' state from the Redux store
  const tasks = useSelector((state) => state.tasks);

  // State to manage the task filter ('all', 'done', 'notDone')
  const [filter, setFilter] = useState('all');

  // Dispatch action to toggle the completion status of a task
  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  // Dispatch action to edit the description of a task
  const handleEdit = (taskId, newDescription) => {
    dispatch(editTask(taskId, newDescription));
  };

  // Function to filter tasks based on the selected filter
  const filteredTasks = () => {
    switch (filter) {
      case 'done':
        return tasks.filter((task) => task.isDone);
      case 'notDone':
        return tasks.filter((task) => !task.isDone);
      default:
        return tasks;
    }
  };

  // Dispatch action to delete a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Render the component
  return (
    <div>
      {/* Filter buttons for displaying 'All', 'Done', and 'Not Done' tasks */}
      <div className="mb-3">
        <br></br>
        <Button variant="primary" onClick={() => setFilter('all')}>
          All
        </Button>{' '}
        <Button variant="success" onClick={() => setFilter('done')}>
          Done
        </Button>{' '}
        <Button variant="danger" onClick={() => setFilter('notDone')}>
          Not Done
        </Button>
      </div>

      {/* Display the filtered tasks using the Task component */}
      {filteredTasks().map((task) => (
        <Task key={task.id} task={task} onToggle={handleToggle} onEdit={handleEdit} onDelete={() => handleDeleteTask(task.id)} />
      ))}
    </div>
  );
};

// Export the ListTask component to be used in other parts of the application
export default ListTask;
