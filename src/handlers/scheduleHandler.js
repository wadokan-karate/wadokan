import {scheduleService} from "../service/scheduleService";

const scheduleHandler = {
    async addSchedule(newSchedule) {

        let schedule = { 
            "day": newSchedule.day,
            "timeRange": newSchedule.timeRange,
            "city": newSchedule.city,
            "location": newSchedule.location,
            "age": newSchedule.age,
            "belt": newSchedule.belt,
            "isActive": true,
        }
        console.log(schedule)
        return await scheduleService.submitSchedule(schedule);
    },
    async loadSchedules(){
        return await scheduleService.getSchedules();
    },
    async loadSchedule(id) {
        return await scheduleService.getSchedule(id);
    },
    async deleteSchedule(id){
        return await scheduleService.deleteSchedule(id);
    },
    async updateSchedule(id, updatedSchedule){
        if (!updatedSchedule) {
            return;
        }
        
        let updatedScheduleStructure = {
            "day": updatedSchedule.day,
            "timeRange": updatedSchedule.timeRange,
            "city": updatedSchedule.city,
            "location": updatedSchedule.location,
            "age": updatedSchedule.age,
            "belt": updatedSchedule.belt,
            "isActive": true,
        }
        console.log(updatedScheduleStructure)

        return await scheduleService.updateSchedule(id, updatedScheduleStructure);
    },
}

export default scheduleHandler;