// external modules
import React from 'react';
import ReactDOM from 'react-dom';

import bodySvgData from '../data/bodySvgData';

import App from './components/App';

const evolution = document.getElementById('evolution');

if (evolution) {
  const userId = JSON.parse(evolution.dataset.user)[0].id;
  const dataBodies = JSON.parse(evolution.dataset.bodies).map((body) => {
    const formatedMuscles = body.muscles.map((muscle) => {
      return { ...bodySvgData.muscles[muscle.name], ...muscle };
    });
    const formatedReflexes = body.reflexes.map((reflex) => {
      return { ...bodySvgData.muscles[reflex.name], ...reflex };
    });
    return {
      body: { ...body.body, userId },
      muscles: formatedMuscles,
      reflexes: formatedReflexes
    };
  });

  ReactDOM.render(

    <App allBodiesMuscles={dataBodies} />,
    evolution
  );
}
