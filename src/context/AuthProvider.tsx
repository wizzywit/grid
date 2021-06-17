import AuthContext from "./AuthContext";
import { useState, useEffect, FC } from "react";
import axios from "axios";

type Props = {};

const AuthProvider: FC<Props> = ({ children }) => {
  const login = async () => {
    try {
      const response = await attemptLogin;
      return response;
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
    localStorage.removeItem("user");
    window.location.reload();
  };

  interface IUser {
    username: string;
  }

  const getCurrentUser = (): IUser | null => {
    var userStr = localStorage.getItem("user");
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

  const filterResult = () => {
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
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  useEffect(() => {
    filterResult();
  }, [colorsFilter, shapesFilter]);

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
