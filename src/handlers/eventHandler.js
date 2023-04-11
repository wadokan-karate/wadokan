import { eventService } from "../service/eventService";


export const eventHandler = {

    async addProductImgBase64(newProductBaseModel) {

       

        let imgStringData = newProductBaseModel.imgBase64;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];
        let imgExtension = imgStringDataSplit[0].split(';')[0].split(':')[1];

        let newProductBase64RequestModel = {
            "eventEntity": {
                "name": newProductBaseModel.name,
                "description": newProductBaseModel.description
            },
            "base64FileModel": {
                "fileName": newProductBaseModel.name + "-Photo",
                "base64FileContent": imgContent,
                "extension": imgExtension
            }
        }

        return await eventService.submitProductImgBase64(newProductBase64RequestModel);

    },
    async loadProductsBase64Array() {

        return await eventService.getProductsBase64Array();

    },
    getFileContentType(extension){
    
        const contentTypes = {
            png: "image/png",
            jpeg: "image/jpeg",
            jpg: "image/jpg"
        }

        try{
            if(contentTypes[extension].length > 0){
                return contentTypes[extension];
            }
        }catch{
            return "application/octet-stream";
        }

    }

}