import { useState, useCallback } from 'react';


const useHttp = () => {
  const [httpLoadingState, dispatchHttpLoading] = useState(false);
  const [httpErrorState, dispatchHttpError] = useState({ errorState: false, errorMessage: "" });

  const navigateTo = (navigateToUrl) => {
    window.location.href = navigateToUrl;
  };

  const navigateOrError = (response, navigateToUrl) => {
    if (response.status === 201 || response.status === 202) {
      navigateTo(navigateToUrl);
    } else {
      dispatchHttpLoading(false);
      dispatchHttpError({ errorState: false, errorMessage: "Sorry, an error occured on our server" });
    }
  };

  const sendDataToServer = useCallback(
    async (url, method, dataForServer, navigateToUrl) => {
      dispatchHttpLoading(true);
      const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
      const response = await fetch(url,
        {
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken
          },
          credentials: 'same-origin',
          body: JSON.stringify(dataForServer)
        });
      navigateOrError(response, navigateToUrl);
    }
  );

  return {
    sendDataToServer,
    httpLoadingState,
    dispatchHttpError,
    httpErrorState
  };
};

export default useHttp;
