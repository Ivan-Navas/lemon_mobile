import React, { createContext, useContext } from "react";
import { ContexType } from "../types";

const AppContext = createContext<ContexType>({});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
