import PhotoService from "../services/PhotoService";

const PhotoHandler = {
    addPhoto(newPhoto) {
    
        let photo = { 
            "title": newPhoto.title,
            "description": newPhoto.description,
            "img": newPhoto.picture,
            "insertDate": new Date(),
            "updateDate": new Date(),
        }
        console.log(photo)
        return PhotoService.submitPhoto(photo);
    },
    loadPhotos(){
        return PhotoService.getPhotos();
    },
    loadPhoto(id) {
        return PhotoServices.getPhoto(id);
    },
    deletePhoto(id){
        return PhotoService.deletePhoto(id);
    },
    updatePhoto(id, updatedPhoto){
        if (!updatedPhoto) {
            console.log(updatedPhoto)
            return;
        }
        
        let updatedPhotoStructure = {
            "title": updatedPhoto.title,
            "description": updatedPhoto.description,
            "img": updatedPhoto.imageURL,
            "updateDate": new Date(),
            "id": ""
        }
        return PhotoService.updatePhoto(id, updatedPhotoStructure);
    },
}

export default PhotoHandler;

