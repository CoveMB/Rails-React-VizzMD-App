import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

import { selectMuscle, changeMuscleForce } from '../actions/index';


class MusclePopUp extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.selectedMuscle !== this.props.selectedMuscle);
  }

  closeModal = () => {
    this.props.selectMuscle(null);
  }

  isMuscleSelected = () => {
    if (this.props.selectedMuscle) {
      return true;
    }
    return false;
  }

  handleForceOnMuscle = (event) => {
    event.preventDefault();
    this.props.changeMuscleForce(
      event.target.innerText,
      this.props.selectedMuscle,
      this.props.muscles
    );
    this.props.selectMuscle(null);
  }

  render() {
    return (
      <Popup
        modal
        position="right center"
        open={this.isMuscleSelected()}
        onClose={this.closeModal}
      >
        <div className="scale-muscle-popup">
          <div className="gradient-square">
            <h5 className="gradient-square-text">{this.props.selectedMuscle}</h5>
          </div>
          <button onClick={this.handleForceOnMuscle} className="zero-force">0</button>
          <button onClick={this.handleForceOnMuscle} className="one-force">1</button>
          <button onClick={this.handleForceOnMuscle} className="two-force">2</button>
          <button onClick={this.handleForceOnMuscle} className="three-force">3</button>
          <button onClick={this.handleForceOnMuscle} className="four-force">4</button>
          <button onClick={this.handleForceOnMuscle} className="five-force">5</button>
        </div>
      </Popup>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMuscle: state.selectedMuscle,
    muscles: state.muscles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectMuscle, changeMuscleForce },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MusclePopUp);
