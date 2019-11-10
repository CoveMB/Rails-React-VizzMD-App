import React from 'react';

const bodyReflex = (props) => {
  const {
    reflexCx, reflexCy, reflexId, reflex
  } = props;

  const reflexFillColor = () => {
    switch (reflex) {
      case 1:
        return "#FF0000";
      case 2:
        return "#FFFF00";
      case 3:
        return "#00FF00";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <circle
      xmlns="http://www.w3.org/2000/svg"
      fill={reflexFillColor()}
      id={reflexId}
      cx={reflexCx}
      cy={reflexCy}
      r="56"
      stroke="#054086"
      strokeWidth="7"
      cursor="pointer"
      pointerEvents="visible"
    />
  );
};

export default bodyReflex;
