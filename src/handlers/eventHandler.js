import { eventService } from "../service/eventService";

export const eventHandler = {
    async addEvent(newEvent) {
        let eventData = {
            "name": newEvent.title,
            "description": newEvent.description,
            "image": newEvent.imgEvent,
            "isActive": true,
        }

        console.log(newEvent)
        return await eventService.submitEvent(eventData);
    },
    async loadEvents(){
        return await eventService.getEvents();
    },
    async loadEvent(id) {
        return await eventService.getEvent(id);
    },
    async deleteEvent(id){
        return await eventService.deleteEvent(id);
    },
    async updateEvent(id, updatedEvent){
        if (!updatedEvent) {
            return;
        }
        
        let updatedEventStructure = {
            "name": updatedEvent.name,
            "description": updatedEvent.description,
            "image": updatedEvent.image,
            "id": updatedEvent.id
        }
        console.log(updatedEventStructure)

        return await eventService.updateEvent(id, updatedEventStructure);
    },
}

export default eventHandler;
