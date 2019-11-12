import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectElement } from '../actions/index';

class TableRow extends Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.rightForce !== nextProps.rightForce
      || this.props.leftForce !== nextProps.leftForce);
  }

  handleClickMuscle = (event) => {
    event.persist();
    this.props.selectElement(event.currentTarget.getAttribute('id'));
  }

  btnForceClass = (force) => {
    const classes = "btn btn-force";
    switch (force) {
      case 1: {
        return `${classes} one-force`;
      }
      case 2: {
        return `${classes} two-force`;
      }
      case 3: {
        return `${classes} three-force`;
      }
      case 4: {
        return `${classes} four-force`;
      }
      case 5: {
        return `${classes} five-force`;
      }
      default: {
        return classes;
      }
    }
  }

  render() {
    const {
      name, nerf, root, rightForce, rightMuscleId, leftForce, leftMuscleId
    } = this.props;
    return (
      <tr>
        <td className="force-td">
          <button
            className={this.btnForceClass(rightForce)}
            id={rightMuscleId}
            onClick={this.handleClickMuscle}
          >
            {rightForce}
            <i className="arrow down" />
          </button>
        </td>
        <td>{name}</td>
        <td>{nerf}</td>
        <td>{root}</td>
        <td>
          <button
            className={this.btnForceClass(leftForce)}
            id={leftMuscleId}
            onClick={this.handleClickMuscle}
          >
            {leftForce}
            <i className="arrow down" />
          </button>
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedElement: state.selectedElement,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectElement },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
