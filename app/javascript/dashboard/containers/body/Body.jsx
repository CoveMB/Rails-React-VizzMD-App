import React, { memo } from 'react';
import { connect } from 'react-redux';
import FaceBody from './FaceBody';

const body = (props) => {
  const bodyParts = () => {
    if (props.body === "back") {
      return <FaceBody svgViewBox="0 25 1410 2890" svgHeight="830" svgWidth="400" bodySide="back" />;
    }
    return <FaceBody svgViewBox="0 60 1355 2690" svgHeight="830" svgWidth="400" bodySide="front" />;
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
