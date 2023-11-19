// Import React and the 'useState' hook for managing component state
import React, { useState } from "react";
import { BsTrash } from 'react-icons/bs'; // Import Bootstrap icon

// Functional component representing an individual task
const Task = ({ task, onToggle, onEdit, onDelete }) => {
  // State to manage the editing mode of the task and the edited description
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  // Function to handle the editing of a task
  const handleEdit = () => {
    // Call the 'onEdit' prop function to update the task's description
    onEdit(task.id, editedDescription);
    // Exit the editing mode
    setIsEditing(false);
  };

  // Function to handle the deletion of a task
  const handleDelete = () => {
    // Call the 'onDelete' prop function to delete the task
    onDelete(task.id);
  };

  // Render the component
  return (
    <div>
      {isEditing ? (
        // Display an input field and a button for editing when in editing mode
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        // Display the task details, checkbox, and buttons when not in editing mode
        <div>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => onToggle(task.id)}
          />
          <span>{task.description}</span> <br></br>
          {/* Button to enter editing mode */}
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          {/* Button to delete the task */}
          <button className="btn btn-danger" onClick={handleDelete}> 
          <BsTrash /> {/* Bootstrap Trash icon */}
          </button>
        </div>
      )}
    </div>
  );
};

// Export the Task component to be used in other parts of the application
export default Task;
