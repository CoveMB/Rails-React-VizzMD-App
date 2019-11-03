import React, { Fragment } from 'react';
import FaceBody from './FaceBody';
import Moment from 'react-moment';

const body = (props) => {
  return (
    <div className="svg-body-date-timeline">
      <a className="svg-timeline" href={`/users/${props.bodyInfo.userId}/patients/${props.bodyInfo.patient_id}/bodies/${props.bodyInfo.id}`}>
        <FaceBody svgViewBox="-100 0 1700 2840" svgHeight="300" svgWidth="100" bodySide="back" muscles={props.allBodiesMuscles.filter((muscle) => muscle["view"] === "back")}/>
        <FaceBody svgViewBox="-100 0 1700 2830" svgHeight="300" svgWidth="100" bodySide="front" muscles={props.allBodiesMuscles.filter((muscle) => muscle["view"] === "front")}/>
      </a>
      <h4 className="timeline-date"><Moment format="YYYY/MM/DD" date={props.bodyInfo.date_data_capture} /></h4>
      <h5 className="timeline-notes"><strong>Note: </strong>{props.bodyInfo.note}</h5>
      <h5 className="timeline-notes"><strong>Traitment: </strong>{props.bodyInfo.traitment}</h5>
    </div>
  );
};

export default body;
