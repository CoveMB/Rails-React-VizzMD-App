import React, { Fragment } from 'react';

import Body from '../containers/body/Body';

const App = (props) => {

  return (
    <div className="timeline scrollbarycustom">
      {props.allBodiesMuscles.map((bodymuscles, index) => {
        return <Body key={index} allBodiesMuscles={bodymuscles.muscles} bodyInfo={bodymuscles.body}/>;
      })}
    </div>
  );
};

export default App;
