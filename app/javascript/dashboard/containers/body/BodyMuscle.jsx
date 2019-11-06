import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectMuscle } from '../../actions/index';

const bodyMusclesCouple = (props) => {
  const muscleFillColor = () => {
    switch (props.muscleForce) {
      case 1:
        return "#FF0000";
      case 2:
        return "#FA6401";
      case 3:
        return "#FFC300";
      case 4:
        return "#FFFF00";
      case 5:
        return "#00FF00";
      default:
        return "#FFFFFF";
    }
  };

  const handleClickMuscle = (event) => {
    event.persist();
    props.selectMuscle(event.target.getAttribute('id'));
  };

  return (
    <path id={props.muscleId} fill={muscleFillColor()} ref={(muscleSVG) => { muscleSVG = muscleSVG; }} onClick={handleClickMuscle} d={props.muscleSVGPath} stroke="#CD0F0F" strokeWidth="7" />
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectMuscle },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(bodyMusclesCouple);
