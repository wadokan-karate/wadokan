import React, { useState, useEffect } from 'react';
import eventHandler from '../handlers/eventHandler';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import View from '../assets/img/ver.png';
import Edit from '../assets/img/editar.png';
import Add from '../assets/img/add.png';
import Delete from '../assets/img/eliminar.png';
import "../style/AV.css"
import "../index.css"


const AVeventsCRUD = () => {
  const [event, setEvents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await eventHandler.loadEvents();
    const filteredData = data.filter(event => event.isActive === true);
    setEvents(filteredData);
  };

  const deleteEvent = async (id) => {
    setEvents(event.filter((p) => p.id !== id));
    await eventHandler.deleteEvent(id);
  };

    return (
      <>
      <div className='containerAdmin'>
        <h1 className="text-black">Listado de noticias</h1>
        <Link to={`/admin/añadir/noticias`}><Button className="flex items-center gap-3 buttonAdd">
                      <img src={Add} alt="ver" className='icons'/><p>Añadir</p>
                      </Button>
                    </Link>
        <div>
          <table>
            <thead>
              <tr>
                <th className='thAdmin'>Nombre</th>
                <th className='thAdmin'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {event.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <div id='iconsCell'>
                    <Link to={`/admin/noticias/editar/${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
                      <img className='icons'src={Edit} alt="editar"/>
                      </Button>
                    </Link>
                    <Link to={`/vistadetalle/${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
                      <img src={View} alt="ver" className='icons'/>
                      </Button>
                    </Link>
                    <Button className="flex items-center gap-3 buttonsCell" onClick={() => deleteEvent(item.id)}>
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
  
  export default AVeventsCRUD;