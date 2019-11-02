import React, { Fragment, useState, lazy, Suspense } from 'react';

import MusclePopUp from '../containers/MusclePopUp';
import TopActions from './TopActions';
import Scale from '../components/Scale';
import Body from '../containers/body/Body';
import Spinner from './Spinner'

const PrintNSavePopUp = lazy(() => import('./printNSaveElements/PrintNSavePopUp'))
const Recap = lazy(() => import('./Recap'));

import MusclesTable from '../containers/MusclesTable';

const App = (props) => {
  const [printing, setPrinting] = useState(false);

  return (
    <Fragment>
      {printing ?
        <Fragment>
          <Suspense fallback={<Spinner/>}>
            <Recap/>
            <PrintNSavePopUp setPrinting={setPrinting}/>
          </Suspense>
        </Fragment>
          :
          <Fragment>
            <TopActions setPrinting={setPrinting}/>
            <MusclePopUp />
            <div className="scale-body">
              <Scale />
              <Body />
            </div>
            <MusclesTable />
          </Fragment>}
    </Fragment>
  );
};

export default App;
