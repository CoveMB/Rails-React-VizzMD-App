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

  const sendRequestToServer = useCallback(
    async (url, method, dataForServer, navigateToUrl) => {
      dispatchHttpLoading(true);
      const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
      const options = {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        credentials: 'same-origin'
      };
      if (method === "PATCH" || method === " POST") {
        options.body = JSON.stringify(dataForServer);
      }
      const response = await fetch(url, options);
      if (navigateToUrl) {
        navigateOrError(response, navigateToUrl);
      }
      const json = await response.json();
      dispatchHttpLoading(false);
      return json;
    }
  );

  return {
    sendRequestToServer,
    httpLoadingState,
    dispatchHttpError,
    httpErrorState
  };
};

export default useHttp;
