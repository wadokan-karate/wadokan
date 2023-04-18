import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7287/Schedule',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const scheduleService = {
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
    async submitSchedule(newSchedule){
        try {
           const response = await apiClient.post("/Post", newSchedule);
           return response.data;
        } catch (error) {
           console.error(error);
        }
     },
    async deleteSchedule(id){
        await apiClient.delete(`/DeleteSchedule?id=${id}`)
    },
    async updateSchedule(id, updatedSchedule){
        await apiClient.patch(`/UpdateSchedule?id=${id}`, updatedSchedule)
    }
}

export default scheduleService;