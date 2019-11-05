import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import parseISO from 'date-fns/parseISO';

import useHttp from '../../../hooks/http';

import musclesOrigin from '../../../data/muscles';

const saveBtn = () => {
  console.log("rendering save btn");
  const muscles = useSelector((state) => state.muscles);

  const traitment = useSelector((state) => state.traitment);

  const { sendDataToServer, httpLoadingState, dispatchHttpLoading } = useHttp();

  const user = JSON.parse(dashboard.dataset.user)[0];

  const patientId = dashboard.dataset.patient;

  const baseUrl = `/api/v1/users/${user.id}/patients/${patientId}/bodies`;

  const navigateTo = () => {
    window.location.href = `/users/${user.id}/patients/${patientId}/bodies`;
  };

  const alertError = (message) => {
    alert(message);
  };

  const navigateOrError = (response) => {
    if (response.status === 201 || response.status === 202) {
      navigateTo(`/users/${user.id}/patients/${patientId}/bodies`);
    } else {
      alertError("Sorry a problem occured");
      dispatchHttpLoading(false);
    }
  };

  const getInitialMuscleState = () => {
    return JSON.parse(dashboard.dataset.muscles).map((muscle) => {
      return { ...musclesOrigin[muscle.name], ...muscle };
    });
  };

  const getInitialTraitmentState = () => {
    const firstTraitmentSate = JSON.parse(dashboard.dataset.traitment);
    firstTraitmentSate.date = parseISO(firstTraitmentSate.date);
    return firstTraitmentSate;
  };

  const getInitialState = () => {
    const firstMusclesState = getInitialMuscleState();
    const firstTraitmentSate = getInitialTraitmentState();
    return { muscles: firstMusclesState, traitment: firstTraitmentSate };
  };

  const checkIfStateChanged = (actualState) => {
    const initialState = getInitialState();
    return !(JSON.stringify(initialState) === JSON.stringify(actualState));
  };

  const handleClickBtn = () => {
    const action = dashboard.dataset.save;
    const dataForServer = { muscles, traitment };
    switch (action) {
      case "update":
        if (checkIfStateChanged(dataForServer)) {
          const url = `${baseUrl}/${dataForServer.muscles[0].body_id}`;
          sendDataToServer(url, "PATCH", dataForServer).then((reponse) => navigateOrError(reponse));
        } else {
          alertError("Unchanged values");
        }
        break;
      case "create":
        sendDataToServer(baseUrl, "POST", dataForServer).then((reponse) => navigateOrError(reponse));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {httpLoadingState ? (
        <button id="gta-print-btn" type="submit" className="btn btn-blue print-btn">
      Saving...
        </button>
      ) : (
        <button id="gta-print-btn" type="submit" className="btn btn-blue print-btn" onClick={() => { handleClickBtn(); }}>
          Save
          <FontAwesomeIcon icon={faSave} />
        </button>
      ) }
    </div>
  );
};


export default saveBtn;
