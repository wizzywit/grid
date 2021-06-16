import AuthContext from "./AuthContext";
import { useState, FC } from "react";

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

  const value = {
    login,
    logout,
    getCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
