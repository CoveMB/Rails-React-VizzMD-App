import React, { Fragment } from 'react';

import PrintNSaveBtn from './printNSaveElements/PrintNSaveBtn';
import BodySelect from '../containers/body/BodySelect';

const TopActions = () => {
  return (
    <Fragment>
      <div className="top-actions">
        <BodySelect />
      </div>
      <PrintNSaveBtn function="save" />
      <PrintNSaveBtn function="print" />
    </Fragment>

  );
};

export default TopActions;
