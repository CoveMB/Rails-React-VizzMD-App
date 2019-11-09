import React from 'react';
import Moment from 'react-moment';
import FaceBody from './FaceBody';

const body = (props) => {
  // console.log(props);
  const res = props.allBodiesReflexes.filter((reflex) => {
    // console.log(reflex);
    return reflex.view === "back";
  });
  // console.log(res);
  return (
    <div className="svg-body-date-timeline">
      <a className="svg-timeline" href={`/users/${props.bodyInfo.userId}/patients/${props.bodyInfo.patient_id}/bodies/${props.bodyInfo.id}`}>
        <FaceBody
          svgViewBox="-100 0 1700 2840"
          svgHeight="300"
          svgWidth="100"
          bodySide="back"
          muscles={props.allBodiesMuscles.filter((muscle) => muscle.view === "back")}
          reflexes={props.allBodiesReflexes.filter((reflex) => reflex.view === "back")}
        />
        <FaceBody
          svgViewBox="-100 0 1700 2830"
          svgHeight="300"
          svgWidth="100"
          bodySide="front"
          muscles={props.allBodiesMuscles.filter((muscle) => muscle.view === "front")}
          reflexes={props.allBodiesReflexes.filter((reflex) => reflex.view === "front")}
        />
      </a>
      <h4 className="timeline-date"><Moment format="YYYY/MM/DD" date={props.bodyInfo.date_data_capture} /></h4>
      <h5 className="timeline-notes">
        <strong>Note: </strong>
        {props.bodyInfo.note}
      </h5>
      <h5 className="timeline-notes">
        <strong>Traitment: </strong>
        {props.bodyInfo.traitment}
      </h5>
    </div>
  );
};

export default body;
