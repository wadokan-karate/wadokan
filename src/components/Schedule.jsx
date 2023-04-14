import React, { useState, useEffect } from 'react';
import scheduleHandler from '../handlers/scheduleHandler';

export default function Schedule() {
  const [schedules, setSchedules] = useState([]);
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetchSchedule(city, location);
  }, [city, location]);

  async function fetchSchedule(city, location) {
    try {
      const data = await scheduleHandler.loadSchedules();
      const filteredData = data.filter((schedule) => {
        return (
          (!city || schedule.city === city) && 
          (!location || schedule.location === location)
        );
      });
      setSchedules(filteredData);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(schedules);

  return (
    <div>
      <select id="city" name="city" onChange={(e) => {
        setCity(e.target.value);
        fetchSchedule(e.target.value, location);
        }}>
        <option value="">Selecciona otra ciudad...</option>
        {[...new Set(schedules.map(schedule => schedule.city))].map(city => (
        <option key={city} value={city}>{city}</option>
        ))}
      </select>

      {/* <select id="location" name="location" value={location} onChange={(e) => {
        setLocation(e.target.value);
        fetchSchedule(city, e.target.value);
      }}>
        <option value="">Selecciona otra ubicación</option>
        {[...new Set(schedules.map(schedule => schedule.location))].map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select> */}

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          {[...new Set(schedules.map(schedule => schedule.timeRange))].map(timeRange => (
            <tr key={timeRange}>
              <td>{timeRange}</td>
              <td>{schedules.find((schedule) => schedule.day === 'Lunes' && schedule.timeRange === timeRange)?.age} <br></br> {schedules.find((schedule) => schedule.day === 'Lunes' && schedule.timeRange === timeRange)?.belt}</td>
              <td>{schedules.find((schedule) => schedule.day === 'Martes' && schedule.timeRange === timeRange)?.age} <br></br> {schedules.find((schedule) => schedule.day === 'Martes' && schedule.timeRange === timeRange)?.belt}</td>
              <td>{schedules.find((schedule) => schedule.day === 'Miércoles' && schedule.timeRange === timeRange)?.age} <br></br> {schedules.find((schedule) => schedule.day === 'Miércoles' && schedule.timeRange === timeRange)?.belt}</td>
              <td>{schedules.find((schedule) => schedule.day === 'Jueves' && schedule.timeRange === timeRange)?.age} <br></br> {schedules.find((schedule) => schedule.day === 'Jueves' && schedule.timeRange === timeRange)?.belt}</td>
              <td>{schedules.find((schedule)=> schedule.day === 'Viernes' && schedule.timeRange === timeRange)?.age} <br></br> {schedules.find((schedule) => schedule.day === 'Viernes' && schedule.timeRange === timeRange)?.belt}</td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
