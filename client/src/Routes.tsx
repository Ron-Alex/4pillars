import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import StatScreen from "./pages/StatScreen/StatScreen";
import NavBar from "./components/NavBar/NavBar";

import type { StatsData } from "./types/Stats.types";
import { useState } from "react";

import { noteAPI } from "./api/api";

export default function AppRoutes() {

    const [stats, setStats] = useState({
    statScores: [
        { mental: 75, physical: 80, social: 65, spiritual: 70 },
    ] as StatsData[],
    })

    const handleSubmit = (note: string) => {
        noteAPI.sendNote(note);
    }

    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/dashboard" element={<DashBoard handleSubmit={handleSubmit}/>} />
                <Route path="/stats" element={<StatScreen stats={stats}/>} />
            </Routes>
        </>
    )
}