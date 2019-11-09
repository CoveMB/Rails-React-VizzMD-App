// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import parseISO from 'date-fns/parseISO';
import reducers from './reducers';

import bodySvgData from '../data/bodySvgData';

import App from './components/App';

const dashboard = document.getElementById('dashboard');

if (dashboard) {
  let musclesToSet = Object.keys(bodySvgData.muscles).map((muscleKey) => {
    return bodySvgData.muscles[muscleKey];
  });

  let reflexesToSet = Object.keys(bodySvgData.reflexes).map((reflexKey) => {
    return bodySvgData.reflexes[reflexKey];
  });

  console.log(reflexesToSet);

  let traitmentToSet = { traitment: "", note: "", date: new Date() };


  if (dashboard.dataset.muscles) {
    musclesToSet = JSON.parse(dashboard.dataset.muscles).map((muscle) => {
      return { ...bodySvgData.muscles[muscle.name], ...muscle };
    });
    if (dashboard.dataset.reflexes) {
      console.log(JSON.parse(dashboard.dataset.reflexes));
      reflexesToSet = JSON.parse(dashboard.dataset.reflexes).map((reflex) => {
        return { ...bodySvgData.reflexes[reflex.name], ...reflex };
      });
    }
    const action = dashboard.dataset.save;
    if (action === "update") {
      traitmentToSet = JSON.parse(dashboard.dataset.traitment);
      traitmentToSet.date = parseISO(traitmentToSet.date);
    }
  }

  ReactDOM.render(
    <Provider
      store={createStore(reducers,
        {
          muscles: musclesToSet,
          traitment: traitmentToSet,
          reflexes: reflexesToSet
        })}
    >
      <App dashboard={dashboard} />
    </Provider>,
    dashboard
  );
}
