import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import scheduleHandler from '../handlers/scheduleHandler';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import '../style/Form.css';


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
  <div id='container'>
  <form onSubmit={handleSubmit} className="form">
    <fieldset>
      <label for="city">Localidad</label>
      <input onChange={handleCityChange} placeholder={schedule.city} id="city"  />

      <label for="location">Ubicación</label>
      <input onChange={handleLocationChange} placeholder={schedule.location} id="location"  />

      <label for="day">Día de la semana</label>
      <input onChange={handleDayChange} placeholder={schedule.day} id="day"  />

      <label for="timeRange">Rango de horario "hh:mm a hh:mm"</label>
      <input onChange={handleTimeRangeChange} placeholder={schedule.timeRange} id="timeRange"  />

      <label for="age">Edad</label>
      <input onChange={handleAgeChange} placeholder={schedule.age} id="age"  />

      <label for="belt">Cinturón o Nivel</label>
      <input onChange={handleBeltChange} placeholder={schedule.belt} id="belt"  />
        

    </fieldset>
          <div id='buttons' style={{display:'flex', flexDirection: 'row'}}>
              <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
              <Link to="/admin/horario" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
          </div>

          <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} style={{backgroundColor: '#2196F3', marginTop:'2vh'}} dismissible>
      <Alert.Heading style={{ color: 'white', textAlign: 'center' }}>{alertVariant === 'success' ? 'Recurso actualizado en la base de datos' : 'Error'}</Alert.Heading>
      <p style={{ color: 'white' }}>
        {alertMessage}
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button style={{ height: '5vh', fontFamily: 'Jmh', width: '5vw', backgroundColor: 'white', fontFamily: 'Montserrat', color: '#2196F3' }} onClick={handleAlertClose} variant="outline-success">
          Cerrar
        </Button>
      </div>
      
    </Alert>
  </form>
 </div>)
  };
  export default Editschedule;