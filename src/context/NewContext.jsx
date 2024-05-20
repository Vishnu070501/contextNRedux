import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [variable, setVariable] = useState("Initial Value");

  return (
    <AppContext.Provider value={{ variable, setVariable }}>
      {children}
    </AppContext.Provider>
  );
};
