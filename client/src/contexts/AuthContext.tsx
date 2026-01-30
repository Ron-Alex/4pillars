import { createContext, useState } from "react";
import type { ReactNode } from "react";

export const AuthContext = createContext<{
    isAuthenticated: boolean;
    setIsAuthenticated: (auth: boolean) => void;
}>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}