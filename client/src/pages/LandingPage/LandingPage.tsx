import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div id="landing_page">
            <h1 className="text-3xl font-bold">Welcome to the Landing Page</h1>
            <p className="text-lg">This is where users first arrive.</p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4" onClick={() => navigate('/login')}>Get Started</button>
        </div>
    );
}  

export default LandingPage;