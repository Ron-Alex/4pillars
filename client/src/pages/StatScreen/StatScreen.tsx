import { useState } from "react";
import type { StatsData } from "../../types/Stats.types";



const StatScreen = (stats: StatsData) => {


    return (
        <div>
            <h1 className="text-3xl font-bold">StatScreen Page</h1>
            <h3 className="text-lg">Here are your current stats:</h3>
            <ul className="list-disc list-inside">
                <div>
                    <li>Mental: {stats.mental}</li>
                    <li>Physical: {stats.physical}</li>
                    <li>Social: {stats.social}</li>
                    <li>Spiritual: {stats.spiritual}</li>
                </div>
            </ul>
        </div>
    );
}
export default StatScreen;