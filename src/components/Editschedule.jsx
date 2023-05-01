import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import scheduleHandler from '../handlers/scheduleHandler';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../src/index.css';

const Editschedule = () => {
  const {id} = useParams();
  const [schedule, setSchedule] = useState({});

useEffect(() => {
  async function fetchSchedule() {
    const scheduleData = await scheduleHandler.loadSchedule(id);
    setSchedule(scheduleData);
  }
  fetchSchedule();
}, [id]);

  const [city, setCity] = useState(schedule.city || '');
  const [location, setLocation] = useState(schedule.location || '');
  const [day, setDay] = useState(schedule.day || '');
  const [timeRange, setTimeRange] = useState(schedule.timeRange || '');
  const [age, setAge] = useState(schedule.age || '');
  const [belt, setBelt] = useState(schedule.belt || '');

useEffect(() => {
  
  if (city === '') {
    setCity(schedule.city || '');
  }
  if (location === '') {
    setLocation(schedule.location || '');
  }
  if (day === '') {
    setDay(schedule.day || '');
  }
  if (timeRange === '') {
    setTimeRange(schedule.timeRange || '');
  }
  if (age === '') {
    setAge(schedule.age || '');
  }
  if (belt === '') {
    setBelt(schedule.belt || '');
  }
}, [schedule.id, schedule.city, schedule.location, schedule.day, schedule.timeRange, schedule.age, schedule.belt]);

  const handleCityChange = (event) => {
      let cityInput = event.target.value;
      setCity(cityInput);
  };

  const handleLocationChange = (event) => {
    let locationInput = event.target.value;
    setLocation(locationInput);
};

  const handleDayChange = (event) => {
  let dayInput = event.target.value;
  setDay(dayInput);
};

const handleTimeRangeChange = (event) => {
  let timeRangeInput = event.target.value;
  setTimeRange(timeRangeInput);
};

  const handleAgeChange = (event) => {
  let ageInput = event.target.value;
  setAge(ageInput);
};

  const handleBeltChange = (event) => {
  let beltInput = event.target.value;
  setBelt(beltInput);
};


    const handleSubmit = async (event) => {
    event.preventDefault();
      
    const updatedSchedule = { id, city, location, day, timeRange, age, belt};
    console.log(updatedSchedule)

    

    await scheduleHandler.updateSchedule(id, updatedSchedule);
    setShowAlert(true);
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleAddClick = () => {
      setShowAlert(true);
  }

  const handleAlertClose = () => {
      setShowAlert(false);
  }

  const [view, setView] = useState(false);

  const handleClose = () => setView(false);
  const handleView = () => setView(true);

  const [alertVariant, setAlertVariant] = useState("success");
const [alertMessage, setAlertMessage] = useState("");

  if (!schedule) {
      return <div>Loading...</div>;
    }

  
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Edita el horario</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Recuerda rellenar todos los campos</p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Localidad</label>
              <input type="text"  name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" onChange={handleCityChange} placeholder={schedule.city} id="city" required />
            </div>

            <div>
              <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ubicación</label>
              <input type="text"  name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" onChange={handleLocationChange} placeholder={schedule.location} id="location" required />
            </div>

            <div>
              <label for="day" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Día</label>
              <input type="text" onChange={handleDayChange} placeholder={schedule.day} id="day" name="day" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
            </div>

            <div>
              <label for="timeRange" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Horario "hh:mm a hh:mm"</label>
              <input onChange={handleTimeRangeChange} placeholder={schedule.timeRange} id="timeRange"  name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
            </div>

            <div>
              <label for="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edad</label>
              <input onChange={handleAgeChange} placeholder={schedule.age} id="age" type="text" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
            </div>

            <div>
              <label for="belt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cinturón o nivel</label>
              <input onChange={handleBeltChange} placeholder={schedule.belt} id="belt" type="text" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
            </div>            
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-wadokanBlue sm:w-fit hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600">Guardar cambios</button>
  
          </form>
        </div>
      </section>
    );
  };
  export default Editschedule;