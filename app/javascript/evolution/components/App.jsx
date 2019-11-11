import React from 'react';

import Body from '../containers/body/Body';

const App = (props) => {
  return (
    <div className="timeline scrollbarycustom">
      {props.allBodiesElement.map((bodyElements, index) => {
        return (
          <Body
            key={index}
            allBodiesMuscles={bodyElements.muscles}
            allBodiesReflexes={bodyElements.reflexes}
            bodyInfo={bodyElements.body}
            evaluationNumber={index + 1}
          />
        );
      })}
    </div>
  );
};

export default App;
