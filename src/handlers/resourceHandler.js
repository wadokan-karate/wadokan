import { resourceService } from "../service/resourceService";

export const resourceHandler = {
    async addResource(newResource) {
        let resourceData = {
            "name": newResource.title,
            "description": newResource.description,
            "image": newResource.imgResource,
            "video": newResource.video,
            "isActive": true,
        }

        console.log(newResource)
        return await resourceService.submitResource(resourceData);
    },
    async loadResources(){
        return await resourceService.getResources();
    },
    async loadResource(id) {
        return await resourceService.getResource(id);
    },
    async deleteResource(id){
        return await resourceService.deleteResource(id);
    },
    async updateResource(id, updatedResource){
        if (!updatedResource) {
            return;
        }
        
        let updatedResourceStructure = {
            "name": updatedResource.name,
            "description": updatedResource.description,
            "image": updatedResource.image,
            "video": updatedResource.video,
            "id": updatedResource.id,
            "isActive": true,
        }
        console.log(updatedResourceStructure)

        return await resourceService.updateResource(id, updatedResourceStructure);
    },
}

export default resourceHandler;