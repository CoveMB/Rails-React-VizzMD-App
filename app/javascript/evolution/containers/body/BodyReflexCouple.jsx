import React, { memo } from 'react';
import BodyReflex from './BodyReflex';

const bodyReflexesCouple = (props) => {
  const {
    reflexName,
    reflexRightCx,
    reflexLeftCx,
    reflexRightCy,
    reflexLeftCy,
    reflexRight,
    reflexLeft,
    reflexRightSVGPath,
    reflexLeftSVGPath
  } = props;

  return (
    [
      <BodyReflex
        key={`${reflexName}-right-reflex`}
        reflexId={`${reflexName}-right-reflex`}
        reflexCx={reflexRightCx}
        reflexCy={reflexRightCy}
        reflex={reflexRight}
        reflexPath={reflexRightSVGPath}
      />,
      <BodyReflex
        key={`${reflexName}-left-reflex`}
        reflexId={`${reflexName}-left-reflex`}
        reflexCx={reflexLeftCx}
        reflexCy={reflexLeftCy}
        reflex={reflexLeft}
        reflexPath={reflexLeftSVGPath}
      />
    ]
  );
};

export default memo(bodyReflexesCouple);
