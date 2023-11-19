// Initial state for the Redux store, containing an empty array of tasks
const initialState = {
  tasks: [],
};

// Reducer function that manages the state of the application based on actions
const rootReducer = (state = initialState, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // Case for adding a new task
    case "ADD_TASK":
      return {
        ...state,
        // Add a new task to the tasks array, with a unique ID
        tasks: [
          ...state.tasks,
          { ...action.payload, id: state.tasks.length + 1 },
        ],
      };

    // Case for toggling the completion status of a task
    case "TOGGLE_TASK":
      return {
        ...state,
        // Map over the tasks array and toggle the 'isDone' property of the selected task
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    // Case for editing the description of a task
    case "EDIT_TASK":
      return {
        ...state,
        // Map over the tasks array and update the description of the selected task
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, description: action.payload.newDescription }
            : task
        ),
      };

    // Case for deleting a task
    case 'DELETE_TASK':
      return {
        ...state,
        // Filter out the task with the specified ID from the tasks array
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    // Default case for unknown action types - return the current state
    default:
      return state;
  }
}; 

// Export the rootReducer to be used in the Redux store
export default rootReducer;
