import { fetAccountApi } from "@/services/api";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IAppContext {
  isAuthenticated: boolean
  setIsAuthenticated: (v: boolean) => void
  setUser: (v: any) => void
  user: IUser | null
  isAppLoading: boolean,
  setIsAppLoading: (v: boolean) => void
}

const CurrentAppContext = createContext<IAppContext | null>(null);

type TProps = {
  children: React.ReactNode
}

export const AppProvider = (prop: TProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<IUser | null>(null)
  const [isAppLoading, setIsAppLoading] = useState<boolean>(false)
  
  const fetchAccount = async () => {
        setIsAppLoading(true); // Bật loading TRƯỚC khi gọi API
        try {
            const res = await fetAccountApi();
            if (res && res.data) {
                setUser(res.data.user);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsAppLoading(false); // Tắt loading dù API thành công hay thất bại
        }
    };
    useEffect(() => {
        fetchAccount()

    }, [])



  return (
    <CurrentAppContext.Provider value={{ user, isAuthenticated, setIsAuthenticated, setUser, isAppLoading, setIsAppLoading }}>
      {prop.children}
    </CurrentAppContext.Provider>
  );
};

export const useCurrentApp = () => {
  const currentAppContext = useContext(CurrentAppContext);

  if (!currentAppContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentAppContext.Provider>"
    );
  }

  return currentAppContext;
};


