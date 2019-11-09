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
        key={`${muscleName}-right`}
        muscleId={`${muscleName}-right`}
        muscleSVGPath={muscleRightSVGPath}
        muscleForce={muscleRightForce}
      />,
      <BodyMuscle
        key={`${muscleName}-left`}
        muscleId={`${muscleName}-left`}
        muscleSVGPath={muscleLeftSVGPath}
        muscleForce={muscleLeftForce}
      />
    ]
  );
};

export default memo(bodyMusclesCouple);
