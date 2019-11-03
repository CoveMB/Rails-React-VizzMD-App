// external modules
import React from 'react';
import ReactDOM from 'react-dom';

import muscles from '../data/muscles';

import App from './components/App';

const evolution = document.getElementById('evolution');

if (evolution) {
  const userId = JSON.parse(evolution.dataset.user)[0].id
  const dataBodies = JSON.parse(evolution.dataset.bodies).map((body) => {
    const formatedMuscles = body.muscles.map((muscle) => {
      return {...muscles[muscle.name], ...muscle};
    });
    return {
      body: {...body.body, userId: userId},
      muscles:formatedMuscles }
  });;

  console.log(dataBodies);

  ReactDOM.render(

      <App allBodiesMuscles={dataBodies}/>,
    evolution
  );
}
