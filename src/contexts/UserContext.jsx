import { createContext, useState } from 'react';

// Cria o UserContext
export const UserContext = createContext();


// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}