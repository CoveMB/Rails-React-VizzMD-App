import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import * as typeformEmbed from '@typeform/embed';
import Router from 'next/router';


const TypeFormBtn = () => {
  const handleReview = (event) => {
    event.preventDefault();
    const popUp = typeformEmbed.makePopup(
      'https://vizz.typeform.com/to/IhOm3d',
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: () => {
          setTimeout(() => {
            popUp.close();
            Router.push("/");
          }, 1000);
        }
      }
    );
    popUp.open();
  };

  return (
    <button onClick={handleReview} className="btn btn-secondary btn-pop-up-review" type="submit">Tell us what you think!</button>
  );
};
// <FontAwesomeIcon icon={faComment} />
export default TypeFormBtn;
