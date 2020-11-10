import React from 'react';

function ErrorFallback({ error }) {
  return (
    <>
      <p>There was an error...</p>
      <pre style={{ maxWidth: 700 }}>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
}

export default ErrorFallback;
