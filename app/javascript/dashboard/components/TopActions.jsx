import React, { Fragment } from 'react';

import PrintNSaveBtn from './printNSaveElements/PrintNSaveBtn';
import BodySelect from '../containers/body/BodySelect';

const TopActions = () => {
  return (
    <Fragment>
      <div className="top-actions">
        <BodySelect />
      </div>
      <div className="print-n-save">
        <PrintNSaveBtn function="save" />
        <PrintNSaveBtn function="print" />
      </div>
    </Fragment>

  );
};

export default TopActions;
