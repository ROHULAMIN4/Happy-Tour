import React, { createContext } from "react";
import UseFirebase from "./UseFirebase";
export const Authcontext = createContext();

const Authprovider = ({ children }) => {
  const allConetext = UseFirebase();
  return (
    <Authcontext.Provider value={allConetext}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
