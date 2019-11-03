// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers';
import parseISO from 'date-fns/parseISO'

import muscles from '../data/muscles';

import App from './components/App';

const dashboard = document.getElementById('dashboard');

if (dashboard) {

  let musclesToSet = Object.keys(muscles).map((muscleKey) => {
    return muscles[muscleKey]
  })

  let traitmentToSet = {traitment: "", note: "", date: ""}


  if(dashboard.dataset.muscles){
    musclesToSet = JSON.parse(dashboard.dataset.muscles).map((muscle) => {
      return {...muscles[muscle.name], ...muscle}
    });
    traitmentToSet = JSON.parse(dashboard.dataset.traitment);
    traitmentToSet.date = parseISO(traitmentToSet.date)
  }

  ReactDOM.render(
    <Provider store={createStore(reducers, { muscles: musclesToSet, traitment: traitmentToSet }) }>
      <App />
    </Provider>,
    dashboard
  );
}
