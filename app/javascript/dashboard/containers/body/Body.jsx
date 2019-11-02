import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import FaceBody from './FaceBody';

const body = (props) => {
  const bodyParts = () => {
    if (props.body === "back") {
      return <FaceBody svgViewBox="-100 0 1700 2840" svgHeight="900" svgWidth="600" bodySide="back" />;
    }
    return <FaceBody svgViewBox="-100 0 1700 2830" svgHeight="900" svgWidth="600" bodySide="front" />;
  };

  return (
    <div className="svg-body">
      {bodyParts()}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    body: state.body
  };
}

export default memo(connect(mapStateToProps)(body));
