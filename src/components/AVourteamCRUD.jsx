import React, { useState, useEffect } from 'react';
import trainerHandler from '../handlers/trainerHandler';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import View from '../assets/img/ver.png';
import Edit from '../assets/img/editar.png';
import Add from '../assets/img/add.png';
import Delete from '../assets/img/eliminar.png';
import "../style/AV.css"
import "../index.css"

const AVourteamCRUD = () => {
  const [trainer, setTrainers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await trainerHandler.loadTrainers();
    setTrainers(data);
  };

  const deleteTrainer = async (id) => {
    setTrainers(trainer.filter((p) => p.id !== id));
    await trainerHandler.deleteTrainer(id);
  };


    return (
      <>
    <div className='containerAdmin'>
      <h1 className="text-black">Listado de monitores</h1>
      <Link to={`/admin/addTrainer`}><Button className="flex items-center gap-3 buttonAdd">
                    <img src={Add} alt="ver" className='icons'/><p>Añadir</p>
                    </Button>
                  </Link>
      <div>
        <table>
          <thead>
            <tr>
              <th className='thAdmin'>Nombre y Apellidos</th>
              <th className='thAdmin'>Foto</th>
              <th className='thAdmin'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {trainer.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td ><img id='tdAdminPhoto' src={`data:image/jpg;base64,${item.photo}`} alt={item.name} /></td>
                <td>
                  <div id='iconsCell'>
                  <Link to={`/admin/editar/${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
                    <img className='icons'src={Edit} alt="editar"/>
                    </Button>
                  </Link>
                  <Link to={`/ver/${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
                    <img src={View} alt="ver" className='icons'/>
                    </Button>
                  </Link>
                  <Button className="flex items-center gap-3 buttonsCell" onClick={() => deleteTrainer(item.id)}>
                  <img className='icons' src={Delete} alt="eliminar"/>
                  </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
    )
  };
  
  export default AVourteamCRUD;