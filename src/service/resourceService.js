import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7287/Resource',
    withCredentials: false,
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'veronicasm79@hotmail.com:VBiWA/Ll3mGqRDkA90J9Bllp/N7FMF5z0yuYN+GRI7zsx3immL1dTL2xXoqt8otVDAoWmHbpSaErhQGc+A/ntw==',
        Accept: 'application/json'
    },
    timeout: 15000 // Aumentamos el tiempo de espera a 15 segundos
});

export const resourceService = {
    async getResources() {
        try {
            let response = await apiClient.get("/GetAllResources");
            if (response.status === 200) {
                let allResources = response.data;
                return allResources;
            } else {
                alert("Upsi, hubo un error al traer los recursos.");
            }
        } catch (error) {
            console.log(error);
            alert("Error al obtener los recursos.");
        }
    },
    async getResource(id) {
        try {
            let response = await apiClient.get(`/GetResourceById?id=${id}`);
            if (response.status === 200) {
                let resource = response.data;
                return resource;
            } else {
                alert("Upsi, hubo un error al traer el recurso.");
            }
        } catch (error) {
            console.log(error);
            alert("Error al obtener el recurso.");
        }
    },
    async submitResource(newResource) {
        let config = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'veronicasm79@hotmail.com:VBiWA/Ll3mGqRDkA90J9Bllp/N7FMF5z0yuYN+GRI7zsx3immL1dTL2xXoqt8otVDAoWmHbpSaErhQGc+A/ntw==',
                Accept: 'application/json'
            }
        }
        let response = await apiClient.post("/InsertResource", newResource, config);
        if (response.status == 200) {
            alert("Recurso insertado correctamente con id " + response.data);
        } else {
            alert("Upsi...hubo un error al insertar el recurso");
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
    async updateResource(id, updatedResource) {
        try {
            await apiClient.patch(`/UpdateResource?id=${id}`, updatedResource);
        } catch (error) {
            console.log(error);
            alert("Error al actualizar el recurso.");
        }
    }
};