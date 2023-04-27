import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import trainerHandler from '../handlers/trainerHandler';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import '../../src/index.css';
import '../style/Form.css';

const EditOurTeam = () => {
    const {id} = useParams();
    const [trainer, setTrainer] = useState({});

  useEffect(() => {
    async function fetchTrainer() {
      const trainerData = await trainerHandler.loadTrainer(id);
      setTrainer(trainerData);
    }
    fetchTrainer();
  }, [id]);

    const [name, setName] = useState(trainer.name || '');
    const [photo, setPhoto] = useState(trainer.photo || '');

  useEffect(() => {
    
    if (name === '') {
      setName(trainer.name || '');
    }
    if (photo === '') {
      setPhoto(trainer.photo || '');
    }
  }, [trainer.id, trainer.name, trainer.photo]);


    const handleImageChange = (event) => {
      const pictureTrainer = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(pictureTrainer);
      console.log(pictureTrainer)
      reader.onload = () => {
        const base64String = reader.result.split(",")[1]; // Obtener la cadena base64 sin la cabecera
        console.log(base64String);
        setPhoto(base64String);
        };console.log(pictureTrainer)
      };
    
            

    const handleNameChange = (event) => {
        let nameInput = event.target.value;
        setName(nameInput);
    };

      const handleSubmit = async (event) => {
      event.preventDefault();
        
      const updatedTrainer = { id, name, photo };
      console.log(updatedTrainer)

      

      await trainerHandler.updateTrainer(id, updatedTrainer);
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

    if (!trainer) {
        return <div>Loading...</div>;
      }

  return (
    <div id='container'>
    <form onSubmit={handleSubmit} className="form">
      <fieldset>
        <label for="name">Nombre del monitor</label>
        <input onChange={handleNameChange} placeholder={trainer.name} id="name"  />

        <fieldset>
        <label htmlFor="pictureTrainer">Foto del monitor</label>
        <input id="pictureTrainer" type="file" onChange={handleImageChange} />
        </fieldset>
          

      </fieldset>
            <div id='buttons' style={{display:'flex', flexDirection: 'row'}}>
                <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
                <Link to="/admin/nuestroequipo" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
            </div>

            <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} style={{backgroundColor: '#2196F3', marginTop:'2vh'}} dismissible>
        <Alert.Heading style={{ color: 'white', textAlign: 'center' }}>{alertVariant === 'success' ? 'Monitor actualizado en la base de datos' : 'Error'}</Alert.Heading>
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
  )

}

export default EditOurTeam