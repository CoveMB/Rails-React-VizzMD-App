import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectElement } from '../../actions/index';

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
        return <path id={reflexId} onClick={handleClickReflex} d={reflexPath.notGood} stroke="#CD0F0F" strokeWidth="12" />;
      } if (reflex === 3) {
        return <path id={reflexId} onClick={handleClickReflex} d={reflexPath.good} stroke="#00FF00" strokeWidth="12" />;
      }
    }
    return (
      <circle
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClickReflex}
        fill={reflexFillColor()}
        id={reflexId}
        cx={reflexCx}
        cy={reflexCy}
        r="40"
        stroke="#054086"
        strokeWidth="10"
        cursor="pointer"
        pointerEvents="visible"
      />
    );
  };

  const handleClickReflex = (event) => {
    event.persist();
    props.selectElement(event.target.getAttribute('id'));
  };

  return (
    <>
      {checkIfPlantarReflex()}
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectElement },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(bodyReflex);
