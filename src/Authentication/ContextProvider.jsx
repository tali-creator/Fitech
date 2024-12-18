import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
const UserContext = createContext(null);

export function ContextProvider({ children }) {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(savedUser);

  function LogOut() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <UserContext.Provider value={{ user, setUser, LogOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UserContext);
  if (!context) {
    return;
  }
  return context;
}
