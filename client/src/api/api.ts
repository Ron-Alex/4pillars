const API_BASE_URL = 'http://localhost:6767/api'

export const noteAPI =  {
    async sendNote(noteData: any) {
        const response = await fetch(`${API_BASE_URL}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noteData)
        });
        console.log(response);
        return response.json();
    }
}