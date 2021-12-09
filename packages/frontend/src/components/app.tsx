import React from 'react';

export const App = () => {
  console.log(process.env.API_URL);
  const onClick = async () => fetch(`${process.env.API_URL}`);

  return (
    <>
      <h1>My React and TypeScript App!</h1>
      <button onClick={onClick}>Connect</button>
    </>
  );
};
