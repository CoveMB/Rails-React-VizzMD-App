// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

import muscles from '../data/muscles';

import App from './components/App';

const dashboard = document.getElementById('dashboard');

if (dashboard) {
  const musclesToSet = JSON.parse(dashboard.dataset.muscles).map((muscle) => {
    return {...muscle, ...muscles[muscle.name]}
  });

  const initialState = { muscles: musclesToSet, patientId: dashboard.dataset.patient, user: JSON.parse(dashboard.dataset.user)[0]};

  ReactDOM.render(
    <Provider store={createStore(reducers, initialState) }>
      <App />
    </Provider>,
    dashboard
  );
}
