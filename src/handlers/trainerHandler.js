import {trainerService} from "../service/trainerService";

const trainerHandler = {
    async addTrainer(newTrainer) {

        let trainer = { 
            "name": newTrainer.name,
            "photo": newTrainer.picture,
            "isActive": true,
        }
        console.log(trainer)
        return await trainerService.submitTrainer(trainer);
    },
    async loadTrainers(){
        return await trainerService.getTrainers();
    },
    async loadTrainer(id) {
        return await trainerService.getTrainer(id);
    },
    async deleteTrainer(id){
        return await trainerService.deleteTrainer(id);
    },
    async updateTrainer(id, updatedTrainer){
        if (!updatedTrainer) {
            return;
        }
        
        let updatedTrainerStructure = {
            "name": updatedTrainer.name,
            "photo": updatedTrainer.photo,
            "isActive": true,
            "id": updatedTrainer.id
        }
        console.log(updatedTrainerStructure)

        return await trainerService.updateTrainer(id, updatedTrainerStructure);
    },
}

export default trainerHandler;