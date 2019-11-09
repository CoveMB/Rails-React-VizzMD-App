import React, { useState, lazy, Suspense } from 'react';

import ScalePopUp from '../containers/ScalePopUp';
import TopActions from './TopActions';
import Scale from "./Scale";
import Body from '../containers/body/Body';
import NotesNTraitment from '../containers/NotesNTraitment';
import Spinner from './Spinner';

import MusclesTable from '../containers/MusclesTable';

const PrintNSavePopUp = lazy(() => import('./printNSaveElements/PrintNSavePopUp'));
const Recap = lazy(() => import('./Recap'));

const App = (props) => {
  const [printing, setPrinting] = useState(false);
  const { dashboard } = props;

  return (
    <>
      {printing
        ? (
          <>
            <Suspense fallback={<Spinner />}>
              <Recap />
              <PrintNSavePopUp setPrinting={setPrinting} />
            </Suspense>
          </>
        )
        : (
          <>
            <TopActions setPrinting={setPrinting} dashboard={dashboard} />
            <ScalePopUp />
            <div className="scale-body">
              <Scale />
              <Body />
              <NotesNTraitment />
            </div>
            <MusclesTable />
          </>
        )}
    </>
  );
};

export default App;
