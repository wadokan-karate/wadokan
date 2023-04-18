import GoogleCalendar from '../components/GoogleCalendar';
import Schedule from '../components/Schedule';
import '../style/Calendar.css'

const Calendar = () => {

    return (
        <>
            <Schedule />
            <GoogleCalendar/>
           
        </>
    );
};

export default Calendar;