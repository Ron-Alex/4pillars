import { useNavigate } from "react-router-dom";

const LoginPage =  ({setAuth}: {setAuth: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Implement login logic here
        setAuth(true);
        navigate('/dashboard');
    }

    return (
        <div>
            <div>
                <h1>Login Page</h1>
                <input type="text" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-2 mb-4"/>
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-4 py-2 mb-4"/>
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 m-4" onClick={handleLogin}>Login</button>
                <button className="bg-red-500 text-white rounded-md px-4 py-2 m-4" onClick={() => navigate('/')}>Cancel</button>
            </div>
            <div>
                <p>Don't have an account? Sign up!</p>
                <button className="bg-green-700 text-white rounded-md px-4 py-2" onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
        </div>
    );
};

export default LoginPage;