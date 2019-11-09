import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import parseISO from 'date-fns/parseISO';
import Popup from "reactjs-popup";

import useHttp from '../../../hooks/http';

import bodySvgData from '../../../data/bodySvgData';

const saveBtn = (props) => {
  const { dashboard } = props;

  const muscles = useSelector((state) => state.muscles);

  const traitment = useSelector((state) => state.traitment);

  const {
    sendDataToServer, httpLoadingState, httpErrorState, dispatchHttpError
  } = useHttp();

  const user = JSON.parse(dashboard.dataset.user)[0];

  const patientId = dashboard.dataset.patient;

  const baseUrl = `/api/v1/users/${user.id}/patients/${patientId}/bodies`;

  const navigateToUrl = `/users/${user.id}/patients/${patientId}/bodies`;

  const getInitialMuscleState = () => {
    return JSON.parse(dashboard.dataset.muscles).map((muscle) => {
      return { ...bodySvgData.muscles[muscle.name], ...muscle };
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
          sendDataToServer(url, "PATCH", dataForServer, navigateToUrl);
        } else {
          dispatchHttpError({ errorState: true, errorMessage: "Unchaged values" });
        }
        break;
      case "create":
        sendDataToServer(baseUrl, "POST", dataForServer, navigateToUrl);
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
      <Popup
        modal
        position="right center"
        open={httpErrorState.errorState}
        onClose={() => { dispatchHttpError({ errorState: false, errorMessage: "" }); }}
      >
        <div className="gradient-square">
          <h5 className="gradient-square-text">{httpErrorState.errorMessage}</h5>
        </div>
      </Popup>
    </div>
  );
};


export default saveBtn;
