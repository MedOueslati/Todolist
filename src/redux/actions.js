// Action creator function for adding a new task
export const addTask = (task) => ({
  type: 'ADD_TASK',          // Action type indicating the addition of a task
  payload: task,             // Payload containing the details of the new task
});

// Action creator function for toggling the completion status of a task
export const toggleTask = (taskId) => ({
  type: 'TOGGLE_TASK',       // Action type indicating the toggling of a task
  payload: taskId,           // Payload containing the ID of the task to be toggled
});

// Action creator function for editing the description of a task
export const editTask = (taskId, newDescription) => ({
  type: 'EDIT_TASK',         // Action type indicating the editing of a task
  payload: {                 // Payload containing the ID and new description of the task
    taskId,
    newDescription,
  },
});

// Action creator function for deleting a task
export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',       // Action type indicating the deletion of a task
  payload: taskId,           // Payload containing the ID of the task to be deleted
});
