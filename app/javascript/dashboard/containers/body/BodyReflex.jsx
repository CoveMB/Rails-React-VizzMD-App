import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectElement } from '../../actions/index';

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

  const handleClickMuscle = (event) => {
    event.persist();
    props.selectElement(event.target.getAttribute('id'));
  };

  return (
    <circle
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClickMuscle}
      fill={reflexFillColor()}
      id={reflexId}
      cx={reflexCx}
      cy={reflexCy}
      r="26"
      stroke="#054086"
      strokeWidth="7"
      cursor="pointer"
      pointerEvents="visible"
    />
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectElement },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(bodyReflex);
