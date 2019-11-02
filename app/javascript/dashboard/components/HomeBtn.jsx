import React from 'react';

const homeBtn = (props) => {
  const goBack = () => {
    props.setPrinting(false);
  };

  return (
    <div className="reset">
      <button className="btn btn-danger" onClick={goBack}>Back </button>
    </div>
  );
};

export default homeBtn;
