import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {setTraitment} from "../actions/index";

const notesNTraitment = () => {

  const dispatch = useDispatch();

  const traitment = useSelector((state) => {
    return state.traitment;
  });

  const handleInput = (event, form) => {
    if (form === "note"){
      dispatch(setTraitment({...traitment, note: event.target.value}))
    } else if (form === "traitment"){
      dispatch(setTraitment({...traitment, traitment: event.target.value}))
    }
  };

  const handleDateInput = (date) => {
    dispatch(setTraitment({...traitment, date: date}))
  }

  return(
    <form className="form-notes">
      <div className="form-group">
        <label htmlFor="notes">Date of data capture:</label>
        <DatePicker
          selected={traitment.date}
          onChange={(date) => {handleDateInput(date)}}
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes on patient's health:</label>
        <textarea className="form-control" id="notes" rows="3" onChange={(event) => {handleInput(event, "note");}} value={traitment.note}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="traitment">Traitment:</label>
        <textarea className="form-control" id="traitment" rows="3" onChange={(event) => {handleInput(event, "traitment");}} value={traitment.traitment}></textarea>
      </div>
    </form>
  );
};

export default notesNTraitment;
