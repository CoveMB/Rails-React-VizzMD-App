import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import musclesOrigin from '../../data/muscles';

import { savePatient } from '../../actions/index';

const PrintNSaveBtn = (props) => {

  const muscles = useSelector((state) => {
    return state.muscles;
  });

  const patientId = useSelector((state) => {
    return state.patientId;
  });

  const user = useSelector((state) => {
    return state.user;
  });

  const getFirstMuscleState = () => {
    return JSON.parse(root.dataset.muscles).map((muscle) => {
      return {...muscle, ...musclesOrigin[muscle.name]}
    });
  }

  const saveDatabase = async () => {
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
      body: JSON.stringify({muscles: muscles})
    });
    const json = await response.json()
    return json
  }

  let id = "";
  let icon = "";
  let text = "";
  let handleClickBtn = "";

  if (props.function === "print") {
    id = "gta-print-btn";
    icon = faPrint;
    text = "Print ";
    handleClickBtn = () => {
      window.print();
    };
  } else if (props.function === "save") {
    id = "gta-save-btn";
    icon = faFilePdf;
    text = "Save ";
    handleClickBtn = () => {
      const firstMusclesState = getFirstMuscleState()
      if (JSON.stringify(muscles) === JSON.stringify(firstMusclesState)){
        alert("Unchanged values")
      } else {
        saveDatabase().then(json => console.log(json))
      }
    };
  }

  return (
    <a><button id={id} className="btn btn-blue print-btn" onClick={()=>{handleClickBtn();}} >{text} <FontAwesomeIcon icon={icon} /></button></a>
  );
};


export default PrintNSaveBtn;
