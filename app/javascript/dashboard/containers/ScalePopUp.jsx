import React from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import Popup from "reactjs-popup";

import { selectElement, changeMuscleForce, changeReflex } from '../actions/index';


const ScalePopUp = (props) => {
  const muscles = useSelector((state) => state.muscles);
  const reflexes = useSelector((state) => state.reflexes);
  const selectedElement = useSelector((state) => state.selectedElement);

  const closeModal = () => {
    props.selectElement("");
  };

  const isMuscleSelected = () => {
    if (selectedElement.length > 1) {
      return true;
    }
    return false;
  };

  const handleDataSelection = (event) => {
    event.preventDefault();
    if (selectedElement.split("-").pop() === "muscle") {
      props.changeMuscleForce(
        event.target.innerText,
        selectedElement,
        muscles
      );
    } else if (selectedElement.split("-").pop() === "reflex") {
      props.changeReflex(
        event.target.innerText,
        selectedElement,
        reflexes
      );
    }
    props.selectElement("");
  };

  const isMuscleOrReflexSelected = () => {
    if (selectedElement.split("-").pop() === "muscle") {
      return (
        <>
          <button type="button" onClick={handleDataSelection} className="four-force">4</button>
          <button type="button" onClick={handleDataSelection} className="five-force">5</button>
        </>
      );
    }
  };

  return (
    <Popup
      modal
      position="right center"
      open={isMuscleSelected()}
      onClose={closeModal}
    >
      <div className="scale-muscle-popup">
        <div className="gradient-square">
          <h5 className="gradient-square-text">{selectedElement}</h5>
        </div>
        <button type="button" onClick={handleDataSelection} className="zero-force">0</button>
        <button type="button" onClick={handleDataSelection} className="one-force">1</button>
        <button type="button" onClick={handleDataSelection} className={selectedElement.split("-").pop() === "reflex" ? "four-force" : "two-force"}>2</button>
        <button type="button" onClick={handleDataSelection} className={selectedElement.split("-").pop() === "reflex" ? "five-force" : "three-force"}>3</button>
        {isMuscleOrReflexSelected()}
      </div>
    </Popup>
  );
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectElement, changeMuscleForce, changeReflex },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(ScalePopUp);
