import React, { useEffect, useState } from 'react';
import Body from '../../../evolution/containers/body/Body';
import Spinner from '../../../dashboard/components/Spinner';

import bodySvgData from '../../../data/bodySvgData';

import useHttp from '../../../hooks/http';


const selectedPatientEvaluation = (props) => {
  const { patientInfo } = props;

  const [bodiesElements, setBodiesElement] = useState([]);

  const {
    sendRequestToServer, httpLoadingState, httpErrorState, dispatchHttpError
  } = useHttp();

  const formatBodiesData = (bodiesData) => {
    return bodiesData.map((body) => {
      const formatedMuscles = body.muscles.map((muscle) => {
        return { ...bodySvgData.muscles[muscle.name], ...muscle };
      });
      const formatedReflexes = body.reflexes.map((reflex) => {
        return { ...bodySvgData.reflexes[reflex.name], ...reflex };
      });
      return {
        body: { ...body.body, userId: patientInfo.user_id },
        muscles: formatedMuscles,
        reflexes: formatedReflexes
      };
    });
  };

  useEffect(() => {
    const url = `/api/v1/users/${patientInfo.user_id}/patients/${patientInfo.id}/bodies`;
    sendRequestToServer(url, "GET").then((data) => {
      const formatedData = formatBodiesData(data);
      setBodiesElement(formatedData);
    });
  }, []);


  return (
    <>
      <div className="patient-details-wrapper">
        <h2 className="patient-details">{patientInfo.hospital_patient_id}</h2>
        <h2 className="patient-details">
Gender:
          {patientInfo.gender}
        </h2>
        <h2 className="patient-details">
Age:
          { Math.floor((new Date() - new Date(patientInfo.date_of_birth).getTime()) / 3.15576e+10)}
        </h2>
      </div>
      <div className="timeline scrollbarycustom">

        {httpLoadingState ? (
          <Spinner />
        ) : (
          bodiesElements.map((bodyElements, index) => {
            return (
              <Body
                key={index}
                allBodiesMuscles={bodyElements.muscles}
                allBodiesReflexes={bodyElements.reflexes}
                bodyInfo={bodyElements.body}
                evaluationNumber={index + 1}
              />
            );
          })
        ) }
      </div>
    </>
  );
};

export default selectedPatientEvaluation;
