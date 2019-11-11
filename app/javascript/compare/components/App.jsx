import React from 'react';

import PatientList from '../containers/patientList/PatientList';
import PatientEvaluations from '../containers/body/PatientsEvaluations';

const app = () => {
  return (
    <div className="compare-row">
      <PatientList />
      <PatientEvaluations />
    </div>
  );
};

export default app;
