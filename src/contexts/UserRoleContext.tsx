import React, { createContext, useContext, useState } from "react";

export type UserRole = "renter" | "lender" | "both";
export type ActiveMode = "renter" | "lender";

interface UserRoleContextType {
  isAuthenticated: boolean;
  userRole: UserRole;
  activeMode: ActiveMode;
  userName: string;
  setIsAuthenticated: (v: boolean) => void;
  setUserRole: (r: UserRole) => void;
  setActiveMode: (m: ActiveMode) => void;
  setUserName: (n: string) => void;
  logout: () => void;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export const UserRoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>("renter");
  const [activeMode, setActiveMode] = useState<ActiveMode>("renter");
  const [userName, setUserName] = useState("");

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole("renter");
    setActiveMode("renter");
    setUserName("");
  };

  return (
    <UserRoleContext.Provider value={{
      isAuthenticated, userRole, activeMode, userName,
      setIsAuthenticated, setUserRole, setActiveMode, setUserName, logout,
    }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = () => {
  const ctx = useContext(UserRoleContext);
  if (!ctx) throw new Error("useUserRole must be used within UserRoleProvider");
  return ctx;
};
