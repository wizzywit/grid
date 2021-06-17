import React from "react";

interface IUser {
  username: string;
}
interface DataArray {
  color: string;
  shape: string;
}

type AuthContextType = {
  login?: () => void;
  logout?: () => void;
  getCurrentUser?: () => IUser | null;
  data?: Array<DataArray>;
  shapesFilter?: Array<string>;
  setShapesFilter?: (
    c: Array<string> | ((c: Array<string>) => Array<string>)
  ) => void;
  colorsFilter?: Array<string>;
  setColorsFilter?: (
    c: Array<string> | ((c: Array<string>) => Array<string>)
  ) => void;
};
const AuthContext = React.createContext<AuthContextType>({});

export default AuthContext;
