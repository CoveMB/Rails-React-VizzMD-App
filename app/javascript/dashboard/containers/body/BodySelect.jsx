import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

import { flipBody } from '../../actions/index';

const bodySelect = (props) => {
  const handleBodyFlip = (event) => {
    if (event.target.id === "Back") {
      props.flipBody("back");
    }
    if (event.target.id === "Front") {
      props.flipBody("front");
    }
  };


  return (
    <>
      <button type="button" id="Front" className="btn btn-blue" onClick={handleBodyFlip}>
Front
        <FontAwesomeIcon icon={faRedo} />
      </button>
      <button type="button" id="Back" className="btn btn-blue" onClick={handleBodyFlip}>
        <FontAwesomeIcon icon={faUndo} />
        {' '}
Back
      </button>
    </>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(bodySelect);
