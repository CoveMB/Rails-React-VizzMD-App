import React, { memo } from 'react';

const bodyMusclesCouple = (props) => {

  const muscleFillColor = () => {
    switch (props.muscleForce) {
      case 1:
        return "#EEF5CF";
      case 2:
        return "#E7D18B";
      case 3:
        return "#E0AB69";
      case 4:
        return "#D65B35";
      case 5:
        return "#CD000F";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <path id={props.muscleId} fill={muscleFillColor()} ref={(muscleSVG) => { muscleSVG = muscleSVG; }} d={props.muscleSVGPath} stroke="#CD0F0F" strokeWidth="7" />
  );
};

export default memo(bodyMusclesCouple);
