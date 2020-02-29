import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const { createLogger } = require('redux-logger');

let middleware = null;

middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true, duration: true, diff: true }));

export default createStore(rootReducer, middleware);
