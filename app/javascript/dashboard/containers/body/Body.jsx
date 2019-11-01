import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaceBody from './FaceBody';

class Body extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.body !== this.props.body);
  }

  bodyParts = () => {
    if (this.props.body === "back") {
      return <FaceBody svgViewBox="-100 0 1700 2840" svgHeight="900" svgWidth="600" bodySide="back" />;
    }
    return <FaceBody svgViewBox="-100 0 1700 2830" svgHeight="900" svgWidth="600" bodySide="front" />;
  }

  render() {
    return (
      <div className="svg-body">
        {this.bodyParts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    body: state.body,
    muscles: state.muscles
  };
}

export default connect(mapStateToProps)(Body);
