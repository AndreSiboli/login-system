"use client";

import { getUser } from "@/services/user";
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface UserContextType {
  userData: UserDataType | null;
}

interface UserDataType {
  username: string;
  email: string;
}

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserDataType | null>(null);

  useEffect(() => {
    async function getData() {
      const res = await getUser();
      if (!res || res.status !== 200) return;
      setUserData(res.data.user);
    }

    getData();
  }, []);

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
}
