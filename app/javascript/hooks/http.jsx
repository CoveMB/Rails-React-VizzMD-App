import { useState, useCallback } from 'react';


const useHttp = () => {
  const [httpLoadingState, dispatchHttpLoading] = useState(false);

  const sendDataToServer = useCallback(
    async (url, method, dataForServer) => {
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
      return response;
    }
  );

  return {
    sendDataToServer,
    httpLoadingState,
    dispatchHttpLoading
  };
};

export default useHttp;
