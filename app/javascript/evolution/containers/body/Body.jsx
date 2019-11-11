import React from 'react';
import Moment from 'react-moment';
import FaceBody from './FaceBody';

const body = (props) => {
  const res = props.allBodiesReflexes.filter((reflex) => {
    return reflex.view === "back";
  });

  const {
    allBodiesMuscles, allBodiesReflexes, bodyInfo, evaluationNumber
  } = props;

  return (
    <div className="svg-body-date-timeline">
      <a className="svg-timeline" href={`/users/${bodyInfo.userId}/patients/${bodyInfo.patient_id}/bodies/${bodyInfo.id}`}>
        <FaceBody
          svgViewBox="-100 0 1700 2840"
          svgHeight="200"
          svgWidth="100"
          bodySide="back"
          muscles={allBodiesMuscles.filter((muscle) => muscle.view === "back")}
          reflexes={allBodiesReflexes.filter((reflex) => reflex.view === "back")}
        />
        <FaceBody
          svgViewBox="-100 0 1700 2830"
          svgHeight="200"
          svgWidth="100"
          bodySide="front"
          muscles={allBodiesMuscles.filter((muscle) => muscle.view === "front")}
          reflexes={allBodiesReflexes.filter((reflex) => reflex.view === "front")}
        />
      </a>
      <h4 className="timeline-date"><Moment format="YYYY/MM/DD" date={bodyInfo.date_data_capture} /></h4>
      <h5 className="timeline-notes">
        <strong>
Evaluation
          {`  ${evaluationNumber}`}
:
          {' '}
        </strong>
        {bodyInfo.traitment}
      </h5>
      <h5 className="timeline-notes">
        <strong>Note: </strong>
        {bodyInfo.note}
      </h5>
    </div>
  );
};

export default body;
