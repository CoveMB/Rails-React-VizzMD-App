import React from 'react';
import { useSelector } from 'react-redux';

import SelectedPatientEvaluation from './SelectedPatientEvaluation';

const patientEvaluations = () => {
  const userPatients = useSelector((state) => state.userPatients);

  return (
    <div className="compare-evaluations-wrapper scrollbarxcustom">
      {userPatients.map((userPatient) => {
        if (userPatient.selected) {
          return <SelectedPatientEvaluation patientInfo={userPatient} key={userPatient.id} />;
        }
        return null;
      })}
    </div>
  );
};

export default patientEvaluations;
