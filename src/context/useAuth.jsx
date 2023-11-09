import { useContext, createContext, useState, useMemo } from "react";
import { produce } from "immer";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    console.log("*** heavy computation ***");
    return {
      name: null,
      role: "guest",
      profile: {
        age: 30,
        address: {
          city: "Bangalore",
          state: "Karnataka",
        },
      },
    };
  });

  const updateUser = (updateFn) => {
    setUser(produce(updateFn));
  };

  const value = useMemo(
    () => ({
      user,
      updateUser,
    }),
    [user]
  );
  //updateUser((draft) => {
  //draft.name = "New Name";
  //});

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
