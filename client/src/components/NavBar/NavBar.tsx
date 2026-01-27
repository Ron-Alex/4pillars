import { useNavigate } from "react-router";

const NavBar = () => {

    const navigate = useNavigate();
    return (
        <nav className="navbar">
        <ul className="nav-links flex space-x-4 m-4 justify-between">
            <li className="px-8"><a href="/dashboard" onClick={() => navigate('/dashboard')}>DashBoard</a></li>
            <li className="px-8"><a href="/stats" onClick={() => navigate('/stats')}>StatScreen</a></li>
            <li className="px-8"><a href="/profile" onClick={() => navigate('/profile')}>Profile</a></li>
        </ul>
        </nav>
    );
}

export default NavBar;