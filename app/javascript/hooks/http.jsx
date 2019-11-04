const useHttp = () => {
  const sendDataToServer = async (url, method, dataForServer) => {
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
  };

  return {
    sendDataToServer,
  };
};

export default useHttp;
