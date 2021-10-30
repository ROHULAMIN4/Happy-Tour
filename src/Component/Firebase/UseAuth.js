import { useContext } from "react";
import { Authcontext } from "./Conetext";

const useAuth = () => {
  return useContext(Authcontext);
};
export default useAuth;
