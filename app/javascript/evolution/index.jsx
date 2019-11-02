// external modules
import React from 'react';
import ReactDOM from 'react-dom';

import muscles from '../data/muscles';

import App from './components/App';

const evolution = document.getElementById('root');

if (evolution) {
  const musclesToSet = JSON.parse(evolution.dataset.muscles).map((muscle) => {
    return {...muscle, ...muscles[muscle.name]}
  });

  const initialState = { muscles: musclesToSet, patientId: evolution.dataset.patient, user: JSON.parse(evolution.dataset.user)[0]};

  ReactDOM.render(

      <App />,
    root
  );
}
