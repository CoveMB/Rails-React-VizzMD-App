import React from 'react';

const patientRow = (props) => {
  const { patientInfo, selectPatient } = props;

  return (
    <div className="compare-patient-row">
      <h2 className={patientInfo.selected ? 'compare-patient-hid compare-patient-selected' : 'compare-patient-hid'} onClick={() => selectPatient(patientInfo)}>{patientInfo.hospital_patient_id}</h2>
    </div>
  );
};

export default patientRow;
