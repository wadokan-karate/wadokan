import '../style/Calendar.css'
import "../index.css"

const GoogleCalendar = () => {
  
    return (
      <div className='googleCalendarResponsive'>
      <h1  id='calendarTittle' className=' bg-wadokanBlue mr-52  ml-52 rounded-md text-dark pt-4 pb-4 text-4xl'>CALENDARIO ANUAL DE EVENTOS</h1>
      <iframe id='iframe' src="https://calendar.google.com/calendar/embed?src=karatewadokansev%40gmail.com&ctz=Europe%2FMadrid" style={{borderwidth:0, width:800, height:600 }}></iframe>
      </div>
    );
  };
  
  export default GoogleCalendar;