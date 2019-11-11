// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from './components/App';

const compare = document.getElementById('compare');

if (compare) {
  const dataPatients = JSON.parse(compare.dataset.patients).map((patient) => {
    return { ...patient, selected: false };
  });

  ReactDOM.render(
    <Provider
      store={createStore(reducers, {
        userPatients: dataPatients
      })}
    >
      <App />
    </Provider>,
    compare
  );
}
