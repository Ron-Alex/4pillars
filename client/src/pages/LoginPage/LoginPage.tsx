import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContext";

import { LoginForm } from "@/components/login-form"

const LoginPage =  () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    return (
        <div>
            <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm md:max-w-4xl">
                    <AuthContext.Provider value={auth}>
                    <LoginForm />
                    </AuthContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;