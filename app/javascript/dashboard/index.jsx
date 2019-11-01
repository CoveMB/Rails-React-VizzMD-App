// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

import muscles from './data/muscles';

import App from './components/App';

const root = document.getElementById('root');

if (root) {
  const musclesToSet = JSON.parse(root.dataset.muscles).map((muscle) => {
    return {...muscle, ...muscles[muscle.name]}
  });

  const initialState = { muscles: musclesToSet, patientId: root.dataset.patient, user: JSON.parse(root.dataset.user)[0]};

  ReactDOM.render(
    <Provider store={createStore(reducers, initialState) }>
      <App />
    </Provider>,
    root
  );
}
