import React from 'react';

import Body from '../containers/body/Body';

const App = (props) => {
  return (
    <div className="timeline scrollbarycustom">
      {props.allBodiesElement.map((bodymuscles, index) => {
        return <Body key={index} allBodiesMuscles={bodymuscles.muscles} allBodiesReflexes={bodymuscles.reflexes} bodyInfo={bodymuscles.body} />;
      })}
    </div>
  );
};

export default App;
