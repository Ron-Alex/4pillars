import { useState } from "react";
import type { StatsData } from "../../types/Stats.types";

const StatScreen = () => {
    const [stats, setStats] = useState({
        statScores: [
            { mental: 75, physical: 80, social: 65, spiritual: 70 },
        ] as StatsData[],
    })

    return (
        <div>
            <h1 className="text-3xl font-bold">StatScreen Page</h1>
            <h3 className="text-lg">Here are your current stats:</h3>
            <ul className="list-disc list-inside">
                {stats.statScores.map(scores => (
                    <div>
                        <li key={scores.mental}>Mental: {scores.mental}</li>
                        <li key={scores.physical}>Physical: {scores.physical}</li>
                        <li key={scores.social}>Social: {scores.social}</li>
                        <li key={scores.spiritual}>Spiritual: {scores.spiritual}</li>
                    </div>

                ))}
            </ul>
        </div>
    );
}
export default StatScreen;