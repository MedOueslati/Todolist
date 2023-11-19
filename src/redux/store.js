// Import the createStore function from the Redux library
import { createStore } from 'redux';

// Import the rootReducer, which combines all the reducers for the application
import rootReducer from './reducers';

// Create the Redux store by passing the rootReducer to createStore
const store = createStore(rootReducer);

// Export the configured Redux store to be used in the application
export default store;
