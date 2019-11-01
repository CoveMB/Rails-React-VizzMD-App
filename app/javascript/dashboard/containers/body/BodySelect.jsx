import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

import { flipBody } from '../../actions/index';

class BodySelect extends PureComponent {
  handleBodyFlip = (event) => {
    if (event.target.innerText === " Back") {
      this.props.flipBody("back");
    }
    if (event.target.innerText === "Front ") {
      this.props.flipBody("front");
    }
  }

  render() {
    return (
      <div className="body-select">
        <button className="btn btn-blue" onClick={this.handleBodyFlip}>Front <FontAwesomeIcon icon={faRedo} /></button>
        <button className="btn btn-blue" onClick={this.handleBodyFlip}><FontAwesomeIcon icon={faUndo} /> Back</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    body: state.body
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { flipBody },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BodySelect);
