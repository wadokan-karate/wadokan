import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import eventHandler from '../handlers/eventHandler';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import '../style/Form.css';

const EditEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    async function fetchEvent() {
      const eventData = await eventHandler.loadEvent(id);
      setEvent(eventData);
    }
    fetchEvent();
  }, [id]);

  const [name, setName] = useState(event.name || '');
  const [description, setDescription] = useState(event.description || '');
  const [image, setImage] = useState(event.image || '');

  useEffect(() => {

    if (name === '') {
      setName(event.name || '');
    }
    if (description === '') {
      setDescription(event.description || '');
    }
    if (image === '') {
      setImage(event.image || '');
    }
  }, [event.id, event.name, event.description, event.image]);


  const handleImageChange = (event) => {
    const pictureEvent = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(pictureEvent);
    console.log(pictureEvent)
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      console.log(base64String);
      setImage(base64String);
    }; console.log(pictureEvent)
  };



  const handleNameChange = (event) => {
    let nameInput = event.target.value;
    setName(nameInput);
  };

  const handleDescriptionChange = (event) => {
    let descriptionInput = event.target.value;
    setDescription(descriptionInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedEvent = { id, name, description, image };
    console.log(updatedEvent)



    await eventHandler.updateEvent(id, updatedEvent);
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

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-darkgrey dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white bg-wadokanBlue">Edita tus noticias</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-black dark:text-gray-400 sm:text-xl">Aqui puedes modificar cualquier apartado de tus noticias</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset>
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Título de la noticia</label>
            <input onChange={handleNameChange} placeholder={event.name} id="name" type="text" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" /> 
          </fieldset>

          <fieldset>

            <label for="descrption" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción<noframes></noframes></label>
            <textarea onChange={handleDescriptionChange} placeholder={event.description} id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

          </fieldset>

          <fieldset>
            <label for='pictureEvent' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Foto</label>
            <input id="pictureEvent" type="file" onChange={handleImageChange}  name="photo" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
          </fieldset>



          <div id='buttons' style={{ display: 'flex', flexDirection: 'row' }}>
            <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
            <Link to="/admin/noticias" style={{ textDecoration: 'none' }}><input id="return" type="button" value="VOLVER" /></Link>
          </div>

          <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} style={{ backgroundColor: '#2196F3', marginTop: '2vh' }} dismissible>
            <Alert.Heading style={{ color: 'white', textAlign: 'center' }}>{alertVariant === 'success' ? 'Noticia actualizada en la base de datos' : 'Error'}</Alert.Heading>
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
      </div>
    </section>
  );
};
export default EditEvent;