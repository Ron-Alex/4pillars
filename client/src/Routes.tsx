import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import StatScreen from "./pages/StatScreen/StatScreen";
import NavBar from "./components/NavBar/NavBar";

export default function AppRoutes() {
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/stats" element={<StatScreen />} />
            </Routes>
        </>
    )
}