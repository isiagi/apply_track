"use client";

import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [applys, setApplys] = useState([]);

  const value = {
    applys,
    setApplys,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
