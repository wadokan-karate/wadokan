import '../style/Calendar.css'
import "../index.css"

const GoogleCalendar = () => {
  
    return (
      <iframe id='iframe' src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FMadrid&src=NmY1Y2Y5Y2ZkOGQ4ZGUxZDIwM2QzYTcyYTFlYmQwNGIzY2IwMTEyZTM4YmU1YzE0MWNlMGEzZWFhOWVkNmZiOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342" style={{borderwidth:0, width:800, height:600 }}
            ></iframe>
    );
  };
  
  export default GoogleCalendar;