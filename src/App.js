import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Import the AddTask and ListTask components
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';


const App = () => {
  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

// Export the App component to be used in other parts of the application
export default App;
