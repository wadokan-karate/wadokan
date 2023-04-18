import scheduleService from "../service/scheduleService";

const scheduleHandler = {
    addSchedule(newSchedule) {

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
        return scheduleService.submitSchedule(schedule);
    },
    loadSchedules(){
        return scheduleService.getSchedules();
    },
    loadSchedule(id) {
        return scheduleService.getSchedule(id);
    },
    deleteSchedule(id){
        return scheduleService.deleteSchedule(id);
    },
    updateSchedule(id, updatedSchedule){
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

        return scheduleService.updateSchedule(id, updatedScheduleStructure);
    },
}

export default scheduleHandler;