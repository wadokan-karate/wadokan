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
        try {
            let response = await apiClient.get("/GetAllSchedules");
            if (response.status === 200) {
                let allSchedules = response.data;
                return allSchedules;
            } else {
                alert("Upsi, hubo un error al traer los horarios.");
            }
        } catch (error) {
            console.log(error);
            alert("Error al obtener los horarios.");
        }
    },
    async getSchedule(id) {
        try {
            let response = await apiClient.get(`/GetScheduleById?id=${id}`);
            if (response.status === 200) {
                let schedule = response.data;
                return schedule;
            } else {
                alert("Upsi, hubo un error al traer el horario.");
            }
        } catch (error) {
            console.log(error);
            alert("Error al obtener al horario.");
        }
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
        if (response.status == 200) {
            alert("Clase insertada correctamente con id " + response.data);
        } else {
            alert("Upsi...hubo un error al insertar la clase");
        }
    },
    async deleteSchedule(id) {
        try {
            await apiClient.delete(`/DeleteSchedule?id=${id}`);
        } catch (error) {
            console.log(error);
            alert("Error al eliminar el horario.");
        }
    },
    async updateSchedule(id, updatedSchedule) {
        try {
            await apiClient.patch(`/UpdateSchedule?id=${id}`, updatedSchedule);
        } catch (error) {
            console.log(error);
            alert("Error al actualizar el horario.");
        }
    }
};