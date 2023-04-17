import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7287/Trainer',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const trainerService = {
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
    async submitTrainer(newTrainer){
        try {
           const response = await apiClient.post("/InsertTrainer", newTrainer);
           return response.data;
        } catch (error) {
           console.error(error);
        }
     },
    async deleteTrainer(id){
        await apiClient.delete(`/DeleteTrainer?id=${id}`)
    },
    async updateTrainer(id, updatedTrainer){
        await apiClient.patch(`/UpdateTrainer?id=${id}`, updatedTrainer)
    }
}

export default trainerService;