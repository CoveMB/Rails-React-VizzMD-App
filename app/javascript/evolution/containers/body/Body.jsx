import React, { Fragment } from 'react';
import FaceBody from './FaceBody';
import Moment from 'react-moment';

const body = (props) => {
  console.log(props);
  return (
    <div className="svg-body-date-timeline">
      <a className="svg-body svg-timeline" href={`/users/${props.bodyInfo.userId}/patients/${props.bodyInfo.patient_id}/bodies/${props.bodyInfo.id}`}>
        <FaceBody svgViewBox="-100 0 1700 2840" svgHeight="300" svgWidth="100" bodySide="back" muscles={props.allBodiesMuscles.filter((muscle) => muscle["view"] === "back")}/>
        <FaceBody svgViewBox="-100 0 1700 2830" svgHeight="300" svgWidth="100" bodySide="front" muscles={props.allBodiesMuscles.filter((muscle) => muscle["view"] === "front")}/>
      </a>
      <h4 className="timeline-date"><Moment format="YYYY/MM/DD" date={props.bodyInfo.created_at} /></h4>
    </div>
  );
};

export default body;
