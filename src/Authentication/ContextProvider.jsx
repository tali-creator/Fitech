import { createContext, useState } from "react";
import { useContext } from "react";

const UserContext = createContext(null);

export function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
