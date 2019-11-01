import React, { Component } from 'react';
import BodyMuscle from './BodyMuscle';

class BodyMusclesCouple extends Component {
  shouldComponentUpdate(nextProps) {
    return ((this.props.muscleRightForce !== nextProps.muscleRightForce)
      ||
      this.props.muscleLeftForce !== nextProps.muscleLeftForce);
  }

  render() {
    const {
      muscleName,
      muscleRightSVGPath,
      muscleRightForce,
      muscleLeftSVGPath,
      muscleLeftForce } = this.props;
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
  }
}

export default BodyMusclesCouple;
