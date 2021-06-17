import React from "react";

interface DataArray {
  color: string;
  shape: string;
}

export type Filter = (
  c: Array<string> | ((c: Array<string>) => Array<string>)
) => void;

type PerformFilterType = (
  shape: string,
  shapesFilter: Array<string> | undefined,
  filter: Filter | undefined,
  type: string
) => void;

type AuthContextType = {
  login?: () => void;
  logout?: () => void;
  data?: Array<DataArray>;
  shapesFilter?: Array<string>;
  setShapesFilter?: Filter;
  colorsFilter?: Array<string>;
  setColorsFilter?: Filter;
  isLoggedIn?: boolean;
  performSelect?: PerformFilterType;
};
const AuthContext = React.createContext<AuthContextType>({});

export default AuthContext;
