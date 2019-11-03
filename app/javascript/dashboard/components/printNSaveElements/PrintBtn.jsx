import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const printBtn = (props) => {

  const handleClickBtn = () => {
    props.setPrinting(true);
    setTimeout(() => {
    window.print();
  }, 100);
  };

  return (
    <a><button id="gta-print-btn" className="btn btn-blue print-btn" onClick={()=>{handleClickBtn();}} >Print <FontAwesomeIcon icon={faPrint} /></button></a>
  );
};


export default printBtn;
