import { useForm } from 'react-hook-form';
import React, { useState, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import resourceHandler from '../handlers/resourceHandler';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import '../style/Form.css';

function AddEvent() {

    const { register, handleSubmit, formState: { errors }, setValue, getValues, reset } = useForm();

    const [showAlert, setShowAlert] = useState(false);
    const formRef = useRef(null);
  
   const handleImageChange = (event) => {
    const imgResource = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgResource);
    console.log(imgResource)
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      console.log(base64String);
      setValue("imgResource", base64String);
      };console.log(imgResource)
    };
  
  
    const handleAddClick = () => {
      setShowAlert(true);
    };
  
    const handleAlertClose = () => {
      setShowAlert(false);
      reset();
    };
  
    const onSubmit = async (data) => {
      await resourceHandler.addResource(data);
      setShowAlert(true);
      formRef.current.reset();
    };
  
    const [alertVariant, setAlertVariant] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");
  
  return (
    <div className='containerForm'>
        <h2>Añadir Recurso</h2>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form">
        <fieldset>

          <div className='containerLabel'>
          <label className='title' htmlFor="title">Título del recurso</label>
          <br></br>
          <input id="title" {...register("title", { required: true })} />
          {errors.title && <span>Debe rellenar este campo</span>}
          </div>
          <br></br>
          <div>
          <label className='description' htmlFor="description">Descripción del recurso</label>
          <br></br>
          <textarea id="description" rows="6" cols="100" {...register("description", { required: true })}
          pattern="[A-Za-z0-9]"></textarea>
          {errors.description && <span>Debe rellenar este campo</span>}
        </div>
        </fieldset>

        <fieldset>
          <label className='video' htmlFor="video">Url del vídeo del recurso</label>
          <br></br>
          <input id="video" {...register("video", { required: true })} />
          {errors.title && <span>Debe rellenar este campo</span>}
          </fieldset>

        <fieldset>
            <label className='img' htmlFor="img">Imagen del recurso</label>
            <input id="img" placeholder='Imagen del evento' type="file" onChange={handleImageChange} />
            {errors.img && <span>Debe rellenar este campo</span>}
          </fieldset>

       

        <div id="buttons" style={{display:'flex', flexDirection: 'row'}}>
          <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
          <Link to="/admin/recursos" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
        </div>
      <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} dismissible>
        <Alert.Heading style={{ color: '#2196F3', textAlign: 'center' }}>{alertVariant === 'success' ? 'Recurso añadido a la base de datos' : 'Error'}</Alert.Heading>
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


export default AddEvent