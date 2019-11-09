import React, { memo } from 'react';
import BodyMuscle from './BodyMuscle';

const bodyMusclesCouple = (props) => {
  const {
    muscleName,
    muscleRightSVGPath,
    muscleRightForce,
    muscleLeftSVGPath,
    muscleLeftForce
  } = props;
  return (
    [
      <BodyMuscle
        key={`${muscleName}-right-muscle`}
        muscleId={`${muscleName}-right-muscle`}
        muscleSVGPath={muscleRightSVGPath}
        muscleForce={muscleRightForce}
      />,
      <BodyMuscle
        key={`${muscleName}-left-muscle`}
        muscleId={`${muscleName}-left-muscle`}
        muscleSVGPath={muscleLeftSVGPath}
        muscleForce={muscleLeftForce}
      />
    ]
  );
};

export default memo(bodyMusclesCouple);
