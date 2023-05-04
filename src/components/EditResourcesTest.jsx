import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import resourceHandler from '../handlers/resourceHandler';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import '../style/Form.css';


const EditResourcesTest = () => {
  const {id} = useParams();
  const [resource, setResource] = useState({});

useEffect(() => {
  async function fetchResource() {
    const resourceData = await resourceHandler.loadResource(id);
    setResource(resourceData);
  }
  fetchResource();
}, [id]);

  const [name, setName] = useState(resource.name || '');
  const [description, setDescription] = useState(resource.description || '');
  const [video, setVideo] = useState(resource.video || '');
  const [image, setImage] = useState(resource.image || '');

useEffect(() => {
  
  if (name === '') {
    setName(resource.name || '');
  }
  if (description === '') {
    setDescription(resource.description || '');
  }
  if (video === '') {
    setVideo(resource.video || '');
  }
  if (image === '') {
    setImage(resource.image || '');
  }
}, [resource.id, resource.name, resource.description, resource.video, resource.image]);


  const handleImageChange = (event) => {
    const pictureResource = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(pictureResource);
    console.log(pictureResource)
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      console.log(base64String);
      setImage(base64String);
      };console.log(pictureResource)
    };
  
          

  const handleNameChange = (event) => {
      let nameInput = event.target.value;
      setName(nameInput);
  };

  const handleDescriptionChange = (event) => {
    let descriptionInput = event.target.value;
    setDescription(descriptionInput);
};

  const handleVideoChange = (event) => {
  let videoInput = event.target.value;
  setVideo(videoInput);
};


    const handleSubmit = async (event) => {
    event.preventDefault();
      
    const updatedResource = { id, name, description , video, image};
    console.log(updatedResource)

    

    await resourceHandler.updateResource(id, updatedResource);
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

  if (!resource) {
      return <div>Loading...</div>;
    }

return (
  <div id='container'>
  <form onSubmit={handleSubmit} className="form">
    <fieldset>
      <label for="name">Título del recurso</label>
      <input onChange={handleNameChange} placeholder={resource.name} id="name"  />

      <label for="description">Descripción del recurso</label>
      <input onChange={handleDescriptionChange} placeholder={resource.description} id="description"  />

      <label for="video">URL vídeo del recurso</label>
      <input onChange={handleVideoChange} placeholder={resource.video} id="video"  />

      <fieldset>
      <label htmlFor="pictureResource">Foto del recurso</label>
      <input id="pictureResource" type="file" onChange={handleImageChange} />
      </fieldset>
        

    </fieldset>
          <div id='buttons' style={{display:'flex', flexDirection: 'row'}}>
              <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
              <Link to="/admin/noticias" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
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

export default EditResourcesTest;