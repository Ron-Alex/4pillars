import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

import DashBoard from "./pages/DashBoard/DashBoard";
import LandingPage from "./pages/LandingPage/LandingPage";
import StatScreen from "./pages/StatScreen/StatScreen";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import type { StatsData } from "./types/Stats.types";

import { noteAPI } from "./api/api";

import { AuthContext } from "./contexts/AuthContext";

export default function AppRoutes() {

    const [stats, setStats] = useState<StatsData>({
        mental: 0,
        physical: 0,
        spiritual: 0,
        social: 0
    });

    const auth = useContext(AuthContext);
    console.log("Auth in Routes:", auth);

    const handleSubmit = (note: string) => {
        console.log("Submitted note:", note);
        noteAPI.sendStats(stats).then((response) => {
            setStats(response);
        }).catch((error) => {
            console.error("Error submitting stats:", error);
        });
    }

    return(
        <>
            {!auth.isAuthenticated ? (
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
            ) : (
                <Routes>
                    <Route element={<NavBar />}>
                        <Route path="/dashboard" element={<DashBoard handleSubmit={handleSubmit}/>} />
                        <Route path="/stats" element={<StatScreen {...stats}/>} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Route>
                </Routes>
            )}
        </>
    )
}