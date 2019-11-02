import React, { Fragment } from 'react';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import HomeBtn from '../../components/HomeBtn';
import BrandWhite from '../../components/BrandWhite';
import Spinner from '../Spinner';

const printNSavePopUp = (props) => {
  return (
    <div id="not-to-be-printed">
      <Popup
        modal
        position="right center"
        open
        onClose={() => {props.setPrinting(false);}}
      >
        <Fragment>
          <div className="gradient-square">
            <h5 className="gradient-square-text">Thanks for using</h5>
            <BrandWhite />
          </div>
          <div className="print-pop-up-btns">
            <HomeBtn setPrinting={props.setPrinting}/>
          </div>
        </Fragment>
      </Popup>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    patient: state.patient
  };
}

export default connect(mapStateToProps)(printNSavePopUp);
