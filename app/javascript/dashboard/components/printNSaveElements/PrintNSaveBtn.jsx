import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faSave } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import musclesOrigin from '../../../data/muscles';

import { savePatient } from '../../actions/index';

const printNSaveBtn = (props) => {

  const muscles = useSelector((state) => {
    return state.muscles;
  });

  const patientId = useSelector((state) => {
    return state.patientId;
  });

  const user = useSelector((state) => {
    return state.user;
  });

  const getInitialMuscleState = () => {
    return JSON.parse(dashboard.dataset.muscles).map((muscle) => {
      return {...muscle, ...musclesOrigin[muscle.name]}
    });
  }

  const popUpResponseStatut = (response) => {
    if(response.status === 201){
      alert("Saved!")
    } else {
      alert("A problem occured!")
    }
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
    return response
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
      props.setPrinting(true);
      setTimeout(() => {
      window.print();
    }, 100);
    };
  } else if (props.function === "save") {
    id = "gta-save-btn";
    icon = faSave;
    text = "Save ";
    handleClickBtn = () => {
      const firstMusclesState = getInitialMuscleState()
      if (JSON.stringify(muscles) === JSON.stringify(firstMusclesState)){
        alert("Unchanged values")
      } else {
        saveDatabase().then(response => {
          popUpResponseStatut(response)
        })
      }
    };
  }

  return (
    <a><button id={id} className="btn btn-blue print-btn" onClick={()=>{handleClickBtn();}} >{text} <FontAwesomeIcon icon={icon} /></button></a>
  );
};


export default printNSaveBtn;
