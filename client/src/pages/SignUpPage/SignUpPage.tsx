import { useNavigate } from "react-router";


const SignUpPage =  ({setAuth}: {setAuth: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <h1>Sign Up Page</h1>
                <input type="text" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-2 mb-4"/>
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-4 py-2 mb-4"/>
                <input type="password" placeholder="Confirm Password" className="border border-gray-300 rounded-md px-4 py-2 mb-4"/>
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 m-4" onClick={() => {setAuth(true); navigate('/dashboard');}}>Sign Up</button>
                <button className="bg-red-500 text-white rounded-md px-4 py-2 m-4" onClick={() => navigate('/')}>Cancel</button>

            </div>
            <div>
                <p>Already have an account? Log in!</p>
                <button className="bg-green-700 text-white rounded-md px-4 py-2" onClick={() => navigate('/login')}>Log In</button>
            </div>

        </div>
    );
};

export default SignUpPage;