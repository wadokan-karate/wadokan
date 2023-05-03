import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7287/Trainer',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'veronicasm79@hotmail.com:VBiWA/Ll3mGqRDkA90J9Bllp/N7FMF5z0yuYN+GRI7zsx3immL1dTL2xXoqt8otVDAoWmHbpSaErhQGc+A/ntw==',
        Accept: 'application/json'
    },
    timeout: 30000 // Aumentamos el tiempo de espera a 15 segundos
});

export const trainerService = {
    async getTrainers() {
        let response = await apiClient.get("/GetAllTrainers");
        let allTrainers = response.data;
        return allTrainers;
    },
    async getTrainer(id) {
        let response = await apiClient.get(`/GetTrainerById?id=${id}`);
        let trainer = response.data;
        return trainer;
    },
    async submitTrainer(newTrainer) {
        let config = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'veronicasm79@hotmail.com:VBiWA/Ll3mGqRDkA90J9Bllp/N7FMF5z0yuYN+GRI7zsx3immL1dTL2xXoqt8otVDAoWmHbpSaErhQGc+A/ntw==',
                Accept: 'application/json'
            }
        }
        let response = await apiClient.post("/InsertTrainer", newTrainer, config);
        return response.data;
    },
    async deleteTrainer(id) {
        await apiClient.delete(`/DeleteTrainer?id=${id}`);
    },
    async updateTrainer(id, updatedTrainer) {
        await apiClient.patch(`/UpdateTrainer?id=${id}`, updatedTrainer);
    }
};

   