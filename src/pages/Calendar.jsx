import GoogleCalendar from '../components/GoogleCalendar';
import '../style/Calendar.css'

const Calendar = () => {

    return (
        <>
           <h1 className="h1Calendar">HORARIO</h1>
           <div className='scheduleContainer bg-wadokanBlue'>ESTO ES UN HORARIO</div>
            <GoogleCalendar/>

            
            
            
           
        </>
    );
};

export default Calendar;