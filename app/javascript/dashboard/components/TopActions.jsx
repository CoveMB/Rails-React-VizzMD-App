import React, { Fragment } from 'react';

import PrintNSaveBtn from './printNSaveElements/PrintNSaveBtn';
import BodySelect from '../containers/body/BodySelect';

const TopActions = () => {
  return (
    <Fragment>
      <BodySelect />
      <PrintNSaveBtn function="save" />
      <PrintNSaveBtn function="print" />
    </Fragment>
  );
};

export default TopActions;
