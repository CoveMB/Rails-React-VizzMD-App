import * as actionsType from './actionsTypes';

export function setPatientAsSelected(patientId, userPatientState) {
  const newUserPatients = userPatientState.map((patient) => {
    if (patient.id === patientId) {
      return { ...patient, selected: !patient.selected };
    }
    return patient;
  });
  return {
    type: actionsType.SET_PATIENT_AS_SELECTED,
    payload: newUserPatients
  };
}
