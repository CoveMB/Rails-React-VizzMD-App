import React, { Fragment } from 'react';

import PrintNSaveBtn from './printNSaveElements/PrintNSaveBtn';
import BodySelect from '../containers/body/BodySelect';

const topActions = (props) => {
  return (
    <Fragment>
      <div className="top-actions">
        <BodySelect />
      </div>
      <div className="print-n-save">
        <PrintNSaveBtn function="print" setPrinting={props.setPrinting} />
        <PrintNSaveBtn function="save" />
      </div>
    </Fragment>
  );
};

export default topActions;
