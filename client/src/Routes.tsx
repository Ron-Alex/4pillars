import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import LandingPage from "./pages/LandingPage/LandingPage";
import StatScreen from "./pages/StatScreen/StatScreen";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import type { StatsData } from "./types/Stats.types";
import { useState } from "react";

import { noteAPI } from "./api/api";

export default function AppRoutes() {

    const [stats, setStats] = useState<StatsData>({
        mental: 0,
        physical: 0,
        spiritual: 0,
        social: 0
    });

    const [auth, setAuth] = useState(false);

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
            {!auth ? (
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
                    <Route path="/signup" element={<SignUpPage setAuth={setAuth} />} />
                </Routes>
            ) : (
                <Routes>
                    <Route element={<NavBar />}>
                        <Route path="/dashboard" element={<DashBoard handleSubmit={handleSubmit}/>} />
                        <Route path="/stats" element={<StatScreen {...stats}/>} />
                    </Route>
                </Routes>
            )}
        </>
    )
}