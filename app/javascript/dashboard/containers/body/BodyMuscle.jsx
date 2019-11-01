import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectMuscle } from '../../actions/index';

class BodyMusclesCouple extends Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.muscleForce !== nextProps.muscleForce);
  }

  muscleFillColor = () => {
    switch (this.props.muscleForce) {
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
  }

  handleClickMuscle = (event) => {
    event.persist();
    this.props.selectMuscle(event.target.getAttribute('id'));
  }

  render() {
    return (
      <path id={this.props.muscleId} fill={this.muscleFillColor()} ref={(muscleSVG) => { this.muscleSVG = muscleSVG; }} onClick={this.handleClickMuscle} d={this.props.muscleSVGPath} stroke="#CD0F0F" strokeWidth="7" />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectMuscle },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(BodyMusclesCouple);
