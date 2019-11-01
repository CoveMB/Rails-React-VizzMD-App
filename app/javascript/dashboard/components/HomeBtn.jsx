import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';

const HomeBtn = () => {
  const goHome = () => {
    Router.push("/");
  };

  return (
    <div className="reset">
      <button className="btn btn-danger" onClick={goHome}>Back </button>
    </div>
  );
};

export default HomeBtn;
