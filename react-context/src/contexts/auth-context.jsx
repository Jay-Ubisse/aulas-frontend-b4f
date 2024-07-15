import { createContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [session, setSession] = useState(null);

  function updateSession(data) {
    setSession(data);
  }

  return (
    <AuthContext.Provider value={{ session, updateSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
