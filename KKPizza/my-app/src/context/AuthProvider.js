import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [isLoggedIn, setIsLoggedIn] = useState(!!storedUser);
  const [user, setUser] = useState(storedUser || null);

  const login = (newUserData) => {
    setIsLoggedIn(true);
    setUser(newUserData);
    localStorage.setItem("user", JSON.stringify(newUserData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser();
    localStorage.removeItem("user");
    localStorage.removeItem("customer");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => useContext(AuthContext);
