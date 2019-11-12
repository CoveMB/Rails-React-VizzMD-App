import React from 'react';

const bodyReflex = (props) => {
  const {
    reflexCx, reflexCy, reflexId, reflex, reflexPath
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

  const checkIfPlantarReflex = () => {
    if (reflexId.split("-")[0] === "Plantar" && (reflex === 1 || reflex === 3)) {
      if (reflex === 1) {
        return <path id={reflexId} d={reflexPath.notGood} stroke="#CD0F0F" strokeWidth="22" />;
      } if (reflex === 3) {
        return <path id={reflexId} d={reflexPath.good} stroke="#00FF00" strokeWidth="22" />;
      }
    } else {
      return (
        <circle
          xmlns="http://www.w3.org/2000/svg"
          fill={reflexFillColor()}
          id={reflexId}
          cx={reflexCx}
          cy={reflexCy}
          r="60"
          stroke="#054086"
          strokeWidth="10"
          cursor="pointer"
          pointerEvents="visible"
        />
      );
    }
  };

  return (
    <>
      {checkIfPlantarReflex()}
    </>
  );
};

export default bodyReflex;
