import React, { useState, useEffect } from 'react';
import scheduleHandler from '../handlers/scheduleHandler';
import "../style/Schedule.css"
import "../index.css"


export default function Schedule() {
  const [schedules, setSchedules] = useState([]);
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [citiesList, setCitiesList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
    async function fetchInitialData() {
      const data = await scheduleHandler.loadSchedules();
      setSchedules(data);
      setCitiesList([...new Set(data.map(schedule => schedule.city))]);

      const filteredData = data.filter(schedule => schedule.city === 'Montequinto');
      setSchedules(filteredData);

      const firstLocation = filteredData[0]?.location;
      if (firstLocation) {
        setCity('Montequinto');
        setLocation(firstLocation);
      }
    }

    fetchInitialData();
  }, []);

  useEffect(() => {
    fetchSchedule(city, location);
  }, [city, location]);

  useEffect(() => {
    if (!city && location) {
      // Filtrar las ciudades por ubicación
      const citiesFiltered = [...new Set(schedules.filter(schedule => schedule.location === location).map(schedule => schedule.city))];
      if (citiesFiltered.length > 0) {
        setCity(citiesFiltered[0]);
      }
    }
  }, [location, city, schedules]);

  async function fetchSchedule(city, location) {
    try {
      const data = await scheduleHandler.loadSchedules();
      let filteredData = data.filter((schedule) => {
        return (
          (!city || schedule.city === city) &&
          (!location || schedule.location === location)
        );
      });

      setSchedules(filteredData);

      // Filtrar las ubicaciones por ciudad
      let locationsFiltered = [...new Set(filteredData.map(schedule => schedule.location))];
      if (city) {
        locationsFiltered = locationsFiltered.filter(location => {
          return filteredData.some(schedule => schedule.city === city && schedule.location === location);
        });
      }

      setLocationsList(locationsFiltered);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(schedules);

  return (
    <div>
    
      <div id="containerSchedule">  
      <h2 id="schedulesTitle">Horario</h2>
        <p>Puede consultar el horario de otras localidades y ubicaciones filtrando los datos a continuación</p>
        <select id="city" name="city" value={city} onChange={(e) => {
          if (city !== e.target.value) {
            setCity(e.target.value);
            setLocation('');
          }
        }}>
          <option value="">Selecciona una localidad</option>
          {citiesList.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <select id="location" name="location" value={location} onChange={(e) => {
          setLocation(e.target.value);
        }}>
          <option value="">Selecciona una ubicación</option>
          {locationsList.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>

      <table>
        <thead>
            <tr>
            <th id='cityTitle' colSpan="6">{city}</th>
          </tr>
          <tr>
            <th id='locationTitle' colSpan="6">{location}</th>
          </tr>
          <tr>
            <th></th>
            <th className='dayTitle'>Lunes</th>
            <th className='dayTitle'>Martes</th>
            <th className='dayTitle'>Miércoles</th>
            <th className='dayTitle'>Jueves</th>
            <th className='dayTitle'>Viernes</th>
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
    </div>
  );
}
