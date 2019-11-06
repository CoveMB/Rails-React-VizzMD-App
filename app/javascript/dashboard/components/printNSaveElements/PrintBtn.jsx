import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const printBtn = (props) => {
  const { dashboard } = props;

  const traitment = useSelector((state) => state.traitment);

  const handleClickBtn = () => {
    props.setPrinting(true);
    setTimeout(() => {
      const patientId = dashboard.dataset.patient;
      document.title = `VizzMD_${patientId}_${moment(traitment.date).format('MM/DD/YYYY')}`;
      window.print();
    }, 100);
  };

  return (
    <a>
      <button id="gta-print-btn" className="btn btn-blue print-btn" onClick={() => { handleClickBtn(); }}>
Print
        <FontAwesomeIcon icon={faPrint} />
      </button>
    </a>
  );
};


export default printBtn;
