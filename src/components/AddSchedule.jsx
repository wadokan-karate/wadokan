import { useForm } from 'react-hook-form';
import React, { useState, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import scheduleHandler from '../handlers/scheduleHandler';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import '../style/Form.css';

function AddSchedule() {

  const { register, handleSubmit, formState: { errors }, setValue, getValues, reset } = useForm();

  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef(null);

  const handleAddClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    reset();
  };

  const onSubmit = async (data) => {
    const response = await scheduleHandler.addSchedule(data);
    console.log(response);
    setShowAlert(true);
    formRef.current.reset();
  };

  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <div className='containerForm'>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white bg-wadokanBlue">Añadir Horario</h2>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form">
        <fieldset>

            <div className='containerLabel'>
          <label className='city' htmlFor="city">Localidad</label>
          <input id="city" {...register("city", { required: true })} />
          {errors.city && <span>Debe rellenar este campo</span>}
        
            <br></br>

          <label className='location' htmlFor="location">Ubicación</label>
          <input id="location" {...register("location", { required: true })} />
          {errors.location && <span>Debe rellenar este campo</span>}

          <br></br>
          
          </div>
            <div className='containerLabel'>
          <label className='day' htmlFor="location">Día</label>
          <input id="day" {...register("day", { required: true })} />
          {errors.day && <span>Debe rellenar este campo</span>}

          <br></br>

          <label className='timeRange' htmlFor="timeRange">Horario de la clase</label>
          <input id="timeRange" {...register("timeRange", { required: true })} />
          {errors.timeRange && <span>Debe rellenar este campo</span>}

          <br></br>
          </div>

          <div className='containerLabel'>

          <label className='age' htmlFor="age">Edad</label>
          <input id="age" {...register("age", { required: true })} />
          {errors.age && <span>Debe rellenar este campo</span>}

          <br></br>

          <label className='belt' htmlFor="belt">Cinturón o nivel</label>
          <input id="belt" {...register("belt")} />

          <br></br>
          </div>

        </fieldset>

        <div id="buttons" style={{display:'flex', flexDirection: 'row'}}>
          <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
          <Link to="/admin/horario" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
        </div>
      <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} dismissible>
        <Alert.Heading style={{ color: '#2196F3', textAlign: 'center' }}>{alertVariant === 'success' ? 'Horario añadido a la base de datos' : 'Error'}</Alert.Heading>
        <p style={{ color: 'white' }}>
          {alertMessage}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button style={{ height: '4vh', width: '5vw' }} onClick={handleAlertClose} variant="outline-success">
            Cerrar
          </Button>
        </div>
      </Alert>
    </form>
    </div>
  )
}


export default AddSchedule