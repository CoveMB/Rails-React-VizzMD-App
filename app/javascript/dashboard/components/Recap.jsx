import React from 'react';

import PatientRef from '../containers/PatientRef';
import Date from './Date';
import Brand from './Brand';
import MusclesTable from '../containers/MusclesTable';
import FaceBody from '../containers/body/FaceBody';
import Scale from './Scale';

const ComponentToPrint = () => {
  return (
    <div id="printComponent">
      <div className="print-container print-brand-section">
        <div className="print-item">
          <Brand />
        </div>
        <div className="print-item">
          <div className="print-info">
            <Date />
            <PatientRef />
          </div>
        </div>
      </div>
      <div className="print-container">
        <div className="print-scale">
          <Scale />
        </div>
        <div className="print-body-part">
          <FaceBody svgHeight="850" svgWidth="250" svgViewBox="-38 0 600 2850" bodySide="front" />
        </div>
        <div className="print-body-part">
          <FaceBody svgHeight="850" svgWidth="250" svgViewBox="817 0 600 2930" bodySide="back" />
        </div>
        <div className="print-table">
          <MusclesTable />
        </div>
        <div className="print-body-part">
          <FaceBody svgHeight="850" svgWidth="250" svgViewBox="-18 0 600 2930" bodySide="back" />
        </div>
        <div className="print-body-part">
          <FaceBody svgHeight="850" svgWidth="250" svgViewBox="792 0 600 2850" bodySide="front" />
        </div>
      </div>
    </div>
  );
};

export default ComponentToPrint;
