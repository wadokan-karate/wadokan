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
        try {
            let response = await apiClient.get("/GetAllTrainers");
            if (response.status === 200) {
                let allTrainers = response.data;
                return allTrainers;
            } else {
                alert("Upsi, hubo un error al traer los monitores.");
            }
        } catch (error) {
            console.log(error);
            alert("Error al obtener los monitores.");
        }
    },
    async getTrainer(id) {
        try {
            let response = await apiClient.get(`/GetTrainerById?id=${id}`);
            if (response.status === 200) {
                let trainer = response.data;
                return trainer;
            } else {
                alert("Upsi, hubo un error al traer al monitor.");
            }
        } catch (error) {
            console.log(error);
            alert("Error al obtener al monitor.");
        }
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
        if (response.status == 200) {
            alert("Monitor insertado correctamente con id " + response.data);
        } else {
            alert("Upsi...hubo un error al insertar el monitor");
        }
    },
    async deleteTrainer(id) {
        try {
            await apiClient.delete(`/DeleteTrainer?id=${id}`);
        } catch (error) {
            console.log(error);
            alert("Error al eliminar el monitor.");
        }
    },
    async updateTrainer(id, updatedTrainer) {
        try {
            await apiClient.patch(`/UpdateTrainer?id=${id}`, updatedTrainer);
        } catch (error) {
            console.log(error);
            alert("Error al actualizar el monitor.");
        }
    }
};

   