import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PatientRow from './PatientRow';

import { setPatientAsSelected } from '../../actions';

const patientList = () => {
  const dispatch = useDispatch();

  const userPatients = useSelector((state) => state.userPatients);

  const selectPatient = useCallback((patient) => {
    dispatch(setPatientAsSelected(patient.id, userPatients));
  }, [userPatients]);

  return (
    <div className="compare-list-wrapper scrollbarxcustom">
      <div className="compare-list-header">
        <h2 className="compare-list-title">Patient List</h2>
        <h6 className="compare-list-title">(select the patients you want to compare)</h6>
      </div>
      {userPatients.map((patient) => {
        return <PatientRow key={patient.id} patientInfo={patient} selectPatient={selectPatient} />;
      })}
    </div>
  );
};

export default patientList;
