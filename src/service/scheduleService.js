import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7287/Schedule',
    withCredentials: false,
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'veronicasm79@hotmail.com:VBiWA/Ll3mGqRDkA90J9Bllp/N7FMF5z0yuYN+GRI7zsx3immL1dTL2xXoqt8otVDAoWmHbpSaErhQGc+A/ntw==',
        Accept: 'application/json'
    },
    timeout: 30000 // Aumentamos el tiempo de espera a 15 segundos
});

export const scheduleService = {
    async getSchedules() {
        let response = await apiClient.get("/GetAllSchedules");
        let allSchedules = response.data;
        return allSchedules;
    },
    async getSchedule(id) {
        let response = await apiClient.get(`/GetScheduleById?id=${id}`);
        let schedule = response.data;
        return schedule;
    },
    async submitSchedule(newSchedule) {
        let config = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'veronicasm79@hotmail.com:VBiWA/Ll3mGqRDkA90J9Bllp/N7FMF5z0yuYN+GRI7zsx3immL1dTL2xXoqt8otVDAoWmHbpSaErhQGc+A/ntw==',
                Accept: 'application/json'
            }
        }
        let response = await apiClient.post("/InsertSchedule", newSchedule, config);
        return response.data;
    },
    async deleteSchedule(id) {
        await apiClient.delete(`/DeleteSchedule?id=${id}`);
    },
    async updateSchedule(id, updatedSchedule) {
        await apiClient.patch(`/UpdateSchedule?id=${id}`, updatedSchedule);
    }
};