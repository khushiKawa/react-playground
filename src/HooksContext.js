import React, { createContext, useState } from 'react';

export const HooksContext = createContext();

export const HooksProvider = (props) => {
  const [mount, setMount] = useState(true);
  const [ignoreProp, setIgnoreProp] = useState(0);
  const [seed, setSeed] = useState(60);

  return (
    <HooksContext.Provider
      value={{ mount, setMount, ignoreProp, setIgnoreProp, seed, setSeed }}
    >
      <div>{props.children}</div>
    </HooksContext.Provider>
  );
};
