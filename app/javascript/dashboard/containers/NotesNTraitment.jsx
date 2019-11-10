import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { setTraitment } from "../actions/index";

const notesNTraitment = () => {
  const dispatch = useDispatch();

  const traitment = useSelector((state) => {
    return state.traitment;
  });

  const handleInput = (event, form) => {
    if (form === "note") {
      dispatch(setTraitment({ ...traitment, note: event.target.value }));
    } else if (form === "traitment") {
      dispatch(setTraitment({ ...traitment, traitment: event.target.value }));
    }
  };

  const handleDateInput = (date) => {
    dispatch(setTraitment({ ...traitment, date }));
  };

  const checkIfDateIsValid = () => {
    if (isNaN(traitment.date.getTime())) {
      return new Date();
    }
    return traitment.date;
  };

  return (
    <form className="form-notes">
      <div className="form-group form-group-body">
        <label htmlFor="notes">Date of data capture:</label>
        <DatePicker
          selected={checkIfDateIsValid()}
          onChange={(date) => { handleDateInput(date); }}
        />
      </div>
      <div className="form-group form-group-body">
        <label htmlFor="notes">Notes on patient's health:</label>
        <textarea className="form-control" id="notes" rows="3" onChange={(event) => { handleInput(event, "note"); }} value={traitment.note} />
      </div>
      <div className="form-group form-group-body">
        <label htmlFor="traitment">Evaluation:</label>
        <textarea className="form-control" id="traitment" rows="3" onChange={(event) => { handleInput(event, "traitment"); }} value={traitment.traitment} />
      </div>
    </form>
  );
};

export default notesNTraitment;
