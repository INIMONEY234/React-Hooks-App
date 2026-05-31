import { createContext, useContext } from "react"; 
import type { Role, User } from "../types/User"; 

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (username: string, role: Role) => void;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
    
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};