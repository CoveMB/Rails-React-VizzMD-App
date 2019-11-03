import React, { Fragment } from 'react';

import SaveBtn from './printNSaveElements/SaveBtn';
import PrintBtn from './printNSaveElements/PrintBtn';
import BodySelect from '../containers/body/BodySelect';

const topActions = (props) => {
  return (
    <Fragment>
      <div className="top-actions">
        <BodySelect />
      </div>
      <div className="print-n-save">
        <PrintBtn setPrinting={props.setPrinting} />
        <SaveBtn function="save" />
      </div>
    </Fragment>
  );
};

export default topActions;
