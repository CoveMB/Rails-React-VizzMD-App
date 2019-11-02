import React, { PureComponent, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

import { flipBody } from '../../actions/index';

const bodySelect= (props) => {
  const handleBodyFlip = (event) => {
    if (event.target.innerText === " Back") {
      props.flipBody("back");
    }
    if (event.target.innerText === "Front ") {
      props.flipBody("front");
    }
  };


    return (
      <Fragment>
        <button className="btn btn-blue" onClick={handleBodyFlip}>Front <FontAwesomeIcon icon={faRedo} /></button>
        <button className="btn btn-blue" onClick={handleBodyFlip}><FontAwesomeIcon icon={faUndo} /> Back</button>
      </Fragment>
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
