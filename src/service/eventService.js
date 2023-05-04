import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7287/Event',
    withCredentials: false,
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'veronicasm79@hotmail.com:VBiWA/Ll3mGqRDkA90J9Bllp/N7FMF5z0yuYN+GRI7zsx3immL1dTL2xXoqt8otVDAoWmHbpSaErhQGc+A/ntw==',
        Accept: 'application/json'
    },
    timeout: 15000 // Aumentamos el tiempo de espera a 15 segundos
});

export const eventService = {
    async getEvents() {
        let response = await apiClient.get("/GetAllEvents");
        let allEvents = response.data;
        return allEvents;
    },
    async getEvent(id) {
        let response = await apiClient.get(`/GetEventById?id=${id}`);
        let event = response.data;
        return event;
    },
    async submitEvent(newEvent) {
        let config = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'veronicasm79@hotmail.com:VBiWA/Ll3mGqRDkA90J9Bllp/N7FMF5z0yuYN+GRI7zsx3immL1dTL2xXoqt8otVDAoWmHbpSaErhQGc+A/ntw==',
                Accept: 'application/json'
            }
        }
        let response = await apiClient.post("/InsertEvent", newEvent, config);
        return response.data;
    },
    async deleteEvent(id) {
        await apiClient.delete(`/DeleteEvent?id=${id}`);
    },
    async updateEvent(id, updatedEvent) {
        await apiClient.patch(`/UpdateEvent?id=${id}`, updatedEvent);
    }
};
