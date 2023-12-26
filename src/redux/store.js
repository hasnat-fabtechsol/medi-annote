import { createStore } from 'redux';
import canvasReducer from './canvasActions';

const store = createStore(canvasReducer);

export default store;