import React from 'react';

import Brand from './Brand';
import MusclesTable from '../containers/MusclesTable';
import FaceBody from '../containers/body/FaceBody';
import Scale from './Scale';

const componentToPrint = () => {
  return (
    <div id="printComponent">
      <div className="print-container print-brand-section">
        <div className="print-item">
          <Brand />
        </div>
        <div className="print-item">
        </div>
      </div>
      <div className="print-container">
        <div className="print-scale">
          <Scale />
        </div>
        <div className="print-body-part">
          <FaceBody svgHeight="740" svgWidth="400" svgViewBox="600 0 90 2800" bodySide="front" />
        </div>
        <div className="print-table">
          <MusclesTable />
        </div>
        <div className="print-body-part">
          <FaceBody svgHeight="740" svgWidth="400" svgViewBox="600 0 90 2850" bodySide="back" />
        </div>
      </div>
    </div>
  );
};

export default componentToPrint;
