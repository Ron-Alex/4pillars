import type { StatsData } from "../types/Stats.types";

const API_BASE_URL = 'http://localhost:6767/api'

export const noteAPI =  {
    async sendNote(noteData: string) {
        console.log("API Call with note:", noteData);
        const response = await fetch(`${API_BASE_URL}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ note: noteData })
        });
        console.log(response);
        return response.json();
    },

    async sendStats(statsData: StatsData) {
        console.log("API Call with stats:", statsData);
        const response = await fetch(`${API_BASE_URL}/stats`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(statsData)
        });
        console.log(response);
        return response.json();
    }
}