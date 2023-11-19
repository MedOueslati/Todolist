// Import React and the 'useState' hook
import React, { useState } from 'react';

// Import the 'useDispatch' hook from 'react-redux'
import { useDispatch } from 'react-redux';

// Import the 'addTask' action creator from the Redux actions
import { addTask } from '../redux/actions';
import { Button } from 'react-bootstrap';

// Functional component for adding a new task
const AddTask = () => {
  // State to manage the description of the new task
  const [description, setDescription] = useState('');

  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle the addition of a new task
  const handleAddTask = () => {
    // Dispatch the 'addTask' action with the new task details
    dispatch(addTask({ description, isDone: false }));
    // Clear the description field after adding the task
    setDescription('');
  };

  // Render the component
  return (
    <div>
      {/* Input field for entering the description of the new task */}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      {/* Button to add the new task */}
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

// Export the AddTask component to be used in other parts of the application
export default AddTask;
