import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7287',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
       // 'Authorization': 'veronicasm79@hotmail.com:VBiWA/Ll3mGqRDkA90J9Bllp/N7FMF5z0yuYN+GRI7zsx3immL1dTL2xXoqt8otVDAoWmHbpSaErhQGc+A/ntw==',
        Accept: 'application/json'
    }
})
export const eventService = {

    async getProductsBase64Array() {
        let response = await apiClient.get("/Event/GetAllBase64List");
        if (!response == 200) {
            alert("Upsi, hubo un error al traer los eventos.")
        };
        let allProducts = response.data;
        return allProducts;
    },

    async submitProductImgBase64(newProductBase64RequestModel) {
        let response = await apiClient.post("/Event/PostBase64", newProductBase64RequestModel)
        if (response.status == 200) {
            alert("Producto insertado correctamente con id " + response.data);
        } else {
            alert("Upsi...hubo un error al insertar el evento");
        }
    },
   /* async deleteProduct(id){
                await apiClient.delete("/Event/DeleteById? + id)
             },*/
}