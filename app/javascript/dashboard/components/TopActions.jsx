import React from 'react';

import SaveBtn from './printNSaveElements/SaveBtn';
import PrintBtn from './printNSaveElements/PrintBtn';
import BodySelect from '../containers/body/BodySelect';

const topActions = (props) => {
  const { dashboard, setPrinting } = props;
  return (
    <>
      <div className="top-actions">
        <PrintBtn setPrinting={setPrinting} />
        <div className="flip-btns">
          <BodySelect />
        </div>
        <SaveBtn function="save" dashboard={dashboard} />
      </div>
    </>
  );
};

export default topActions;
