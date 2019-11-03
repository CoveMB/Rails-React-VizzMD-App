import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import parseISO from 'date-fns/parseISO'

import musclesOrigin from '../../../data/muscles';

const saveBtn = (props) => {

  const muscles = useSelector((state) => {
    return state.muscles;
  });

  const traitment = useSelector((state) => {
    return state.traitment;
  });

  const patientId = dashboard.dataset.patient

  const user = JSON.parse(dashboard.dataset.user)[0]

  const getInitialMuscleState = () => {
    return JSON.parse(dashboard.dataset.muscles).map((muscle) => {
      return {...musclesOrigin[muscle.name], ...muscle}
    });
  }

  const popUpResponseStatut = (response, saveOption) => {
    switch (saveOption) {
      case "create":
        if(response.status === 201){
          window.location.href = `/users/${user.id}/patients/${patientId}/bodies`
        } else {
          alert("Sorry a problem occured")
        }
        break;
      case "update":
        if(response.status === 202){
          window.location.href = `/users/${user.id}/patients/${patientId}/bodies`
        } else {
          alert("Sorry a problem occured")
        }
        break;
      default:
        break;

    }
  }

  const saveCreateBody = async () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const response = await fetch(`/api/v1/users/${user.id}/patients/${patientId}/bodies`,
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin',
      body: JSON.stringify({muscles: muscles, traitment: traitment})
    });
    return response
  }

  const saveUpdateBody = async () => {
    const bodyId = muscles[0].body_id
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const response = await fetch(`/api/v1/users/${user.id}/patients/${patientId}/bodies/${bodyId}`,
    {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin',
      body: JSON.stringify({muscles: muscles, traitment: traitment})
    });
    return response
  }

  const handleUpdate = () => {
    const firstMusclesState = getInitialMuscleState()
    const firstTraitmentSate = JSON.parse(dashboard.dataset.traitment);
    firstTraitmentSate.date = parseISO(firstTraitmentSate.date)
    console.log(JSON.stringify(muscles) === JSON.stringify(firstMusclesState));
    console.log(JSON.stringify(firstTraitmentSate) === JSON.stringify(traitment));
    if (JSON.stringify(muscles) === JSON.stringify(firstMusclesState) && JSON.stringify(firstTraitmentSate) === JSON.stringify(traitment)){
      alert("Unchanged values")
    } else {
      saveUpdateBody().then(response => {
        popUpResponseStatut(response, "update")
      })
    }
  }

  const handleClickBtn = () => {
    switch (dashboard.dataset.save) {
      case "update":
        handleUpdate()
        break;
      case "create":
        saveCreateBody().then(response => {
          popUpResponseStatut(response, "create")
        })
        break;
      default:
        break;
    }
  };

  return (
    <a><button id="gta-print-btn" className="btn btn-blue print-btn" onClick={()=>{handleClickBtn();}} >Save <FontAwesomeIcon icon={faSave} /></button></a>
  );
};


export default saveBtn;
