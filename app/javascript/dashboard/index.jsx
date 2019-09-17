// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

const root = document.getElementById('root');

if (root){
  // render an instance of the component in the DOM
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
  root
  );
}
