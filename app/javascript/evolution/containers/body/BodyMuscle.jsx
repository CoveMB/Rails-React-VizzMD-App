import React from 'react';

const bodyMuscle = (props) => {
  const { muscleId, muscleSVGPath, muscleForce } = props;

  const muscleFillColor = () => {
    switch (muscleForce) {
      case 1:
        return "#FF0000";
      case 2:
        return "#FA7F01";
      case 3:
        return "#FFFF00";
      case 4:
        return "#D4FF00";
      case 5:
        return "#00FF00";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <path id={muscleId} fill={muscleFillColor()} d={muscleSVGPath} stroke="#CD0F0F" strokeWidth="7" />
  );
};

export default bodyMuscle;
