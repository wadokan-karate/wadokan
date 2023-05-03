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
        let response = await apiClient.get("/GetAllResources");
        let allResources = response.data;
        return allResources;
    },
    async getResource(id) {
        let response = await apiClient.get(`/GetResourceById?id=${id}`);
        let resource = response.data;
        return resource;
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
        return response.data;
    },
    async deleteResource(id) {
        await apiClient.delete(`/DeleteResource?id=${id}`);
    },
    async updateResource(id, updatedResource) {
        await apiClient.patch(`/UpdateResource?id=${id}`, updatedResource);
    }
};