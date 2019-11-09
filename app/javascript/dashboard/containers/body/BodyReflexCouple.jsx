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
  } = props;

  return (
    [
      <BodyReflex
        key={`${reflexName}-right-reflex`}
        reflexId={`${reflexName}-right-reflex`}
        reflexCx={reflexRightCx}
        reflexCy={reflexRightCy}
        reflex={reflexRight}
      />,
      <BodyReflex
        key={`${reflexName}-left-reflex`}
        reflexId={`${reflexName}-left-reflex`}
        reflexCx={reflexLeftCx}
        reflexCy={reflexLeftCy}
        reflex={reflexLeft}
      />
    ]
  );
};

export default memo(bodyReflexesCouple);
