import trainerService from "../service/trainerService";

const trainerHandler = {
    addTrainer(newTrainer) {

        let trainer = { 
            "name": newTrainer.name,
            "photo": newTrainer.picture,
            "isActive": true,
        }
        console.log(trainer)
        return trainerService.submitTrainer(trainer);
    },
    loadTrainers(){
        return trainerService.getTrainers();
    },
    loadTrainer(id) {
        return trainerService.getTrainer(id);
    },
    deleteTrainer(id){
        return trainerService.deleteTrainer(id);
    },
    updateTrainer(id, updatedTrainer){
        if (!updatedTrainer) {
            return;
        }
        
        let updatedTrainerStructure = {
            "name": updatedTrainer.name,
            "photo": updatedTrainer.photo,
            "isActive": true,
        }
        console.log(updatedTrainerStructure)

        return trainerService.updateTrainer(id, updatedTrainerStructure);
    },
}

export default trainerHandler;