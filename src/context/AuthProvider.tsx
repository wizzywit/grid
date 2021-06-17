import AuthContext from "./AuthContext";
import { useState, useEffect, FC, useCallback } from "react";
import axios from "axios";

type Props = {};

const AuthProvider: FC<Props> = ({ children }) => {
  const login = async () => {
    try {
      const response = await attemptLogin;
      console.log(response);
      const user = {
        username: "user",
      };
      localStorage.setItem("loggedUser", JSON.stringify(user));
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const attemptLogin = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200, message: "successfully logged in" });
    });
  });
  const logout = () => {
    localStorage.removeItem("loggedUser");
    window.location.reload();
  };

  interface IUser {
    username: string;
  }

  const getCurrentUser = (): IUser | null => {
    var userStr = localStorage.getItem("loggedUser");
    if (userStr) {
      return JSON.parse(userStr || "");
    } else {
      return null;
    }
  };
  interface IResponse {
    items?: Array<{ color: string; shape: string }>;
  }
  const [response, setResponse] = useState<IResponse>({});
  const [data, setData] = useState<
    Array<{ color: string; shape: string }> | undefined
  >([]);
  const [shapesFilter, setShapesFilter] = useState([
    "oval",
    "traingle",
    "round",
    "square",
    "rectangle",
  ]);
  const [colorsFilter, setColorsFilter] = useState([
    "red",
    "blue",
    "green",
    "yellow",
    "cyan",
    "grey",
  ]);
  const getData = () => {
    axios
      .get("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((resp) => {
        console.log(resp);
        setResponse(resp.data);
        setData(resp.data.items);
      });
  };

  const filterResult = useCallback(() => {
    const filteredArr = response.items?.filter((item) => {
      console.log(
        colorsFilter.includes(item.color),
        " ",
        shapesFilter.includes(item.shape)
      );

      return (
        colorsFilter.includes(item.color) && shapesFilter.includes(item.shape)
      );
    });
    setData(filteredArr);
  }, [colorsFilter, response, shapesFilter]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterResult();
  }, [colorsFilter, shapesFilter, filterResult]);

  const value = {
    login,
    logout,
    getCurrentUser,
    data,
    setShapesFilter,
    setColorsFilter,
    shapesFilter,
    colorsFilter,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
