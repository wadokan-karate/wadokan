import React, { useState, useEffect } from 'react';
import { google } from 'googleapis';
import "../index.css"

const GoogleCalendar = () => {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      const getEvents = async () => {
        const auth = new google.auth.GoogleAuth({
          // Aquí debes agregar las credenciales de Google API
        });
  
        const calendar = google.calendar({ version: 'v3', auth });
        const response = await calendar.events.list({
          calendarId: 'primary',
          timeMin: new Date().toISOString(),
          maxResults: 10,
          singleEvents: true,
          orderBy: 'startTime',
        });
  
        setEvents(response.data.items);
      };
  
      getEvents();
    }, []);
  
    return (
      <div>
        <h2>Calendario de Google</h2>
        {events.map((event) => (
          <div key={event.id}>
            <h4>{event.summary}</h4>
            <p>{event.start.dateTime}</p>
            <p>{event.end.dateTime}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default GoogleCalendar;