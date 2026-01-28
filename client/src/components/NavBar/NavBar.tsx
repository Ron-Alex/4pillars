import { useNavigate, Outlet } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();
    return (
        <>
        <nav className="navbar">
        <ul className="nav-links flex space-x-4 m-4 justify-between">
            <li className="px-8" onClick={() => navigate('/dashboard')}>DashBoard</li>
            <li className="px-8" onClick={() => navigate('/stats')}>StatScreen</li>
            <li className="px-8" onClick={() => navigate('/profile')}>Profile</li>
        </ul>
        </nav>
        <Outlet />
        </>
    );
}

export default NavBar;