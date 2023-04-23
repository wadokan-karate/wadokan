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
        try {
            let response = await apiClient.get("/GetAllEvents");
            if (response.status === 200) {
                let allEvents = response.data;
                return allEvents;
            } else {
                alert("Upsi, hubo un error al traer los eventos.");
            }
        } catch (error) {
            console.log(error);
            alert("Error al obtener los eventos.");
        }
    },
    async getEvent(id) {
        try {
            let response = await apiClient.get(`/GetEventById?id=${id}`);
            if (response.status === 200) {
                let event = response.data;
                return event;
            } else {
                alert("Upsi, hubo un error al traer el evento.");
            }
        } catch (error) {
            console.log(error);
            alert("Error al obtener el evento.");
        }
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
        if (response.status == 200) {
            alert("Evento insertado correctamente con id " + response.data);
        } else {
            alert("Upsi...hubo un error al insertar el evento");
        }
    },
    async deleteEvent(id) {
        try {
            await apiClient.delete(`/DeleteEvent?id=${id}`);
        } catch (error) {
            console.log(error);
            alert("Error al eliminar el evento.");
        }
    },
    async updateEvent(id, updatedEvent) {
        try {
            await apiClient.patch(`/UpdateEvent?id=${id}`, updatedEvent);
        } catch (error) {
            console.log(error);
            alert("Error al actualizar el evento.");
        }
    }
};
