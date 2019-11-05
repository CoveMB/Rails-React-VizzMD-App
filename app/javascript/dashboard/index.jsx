// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import parseISO from 'date-fns/parseISO';
import reducers from './reducers';

import muscles from '../data/muscles';

import App from './components/App';

const dashboard = document.getElementById('dashboard');

if (dashboard) {
  let musclesToSet = Object.keys(muscles).map((muscleKey) => {
    return muscles[muscleKey];
  });

  let traitmentToSet = { traitment: "", note: "", date: new Date() };


  if (dashboard.dataset.muscles) {
    musclesToSet = JSON.parse(dashboard.dataset.muscles).map((muscle) => {
      return { ...muscles[muscle.name], ...muscle };
    });
    const action = dashboard.dataset.save;
    if (action === "update") {
      traitmentToSet = JSON.parse(dashboard.dataset.traitment);
      traitmentToSet.date = parseISO(traitmentToSet.date);
    }
  }

  ReactDOM.render(
    <Provider store={createStore(reducers, { muscles: musclesToSet, traitment: traitmentToSet })}>
      <App dashboard={dashboard} />
    </Provider>,
    dashboard
  );
}
