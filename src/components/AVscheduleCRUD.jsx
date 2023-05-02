import React, { useState, useEffect } from 'react';
import scheduleHandler from '../handlers/scheduleHandler';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import View from '../assets/img/ver.png';
import Edit from '../assets/img/editar.png';
import Add from '../assets/img/add.png';
import Delete from '../assets/img/eliminar.png';
import "../style/AV.css"
import "../index.css"


const AVscheduleCRUD = () => {
  const [schedule, setSchedules] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await scheduleHandler.loadSchedules();
    setSchedules(data);
  };

  const deleteSchedule = async (id) => {
    setEvents(schedule.filter((p) => p.id !== id));
    await scheduleHandler.deleteSchedule(id);
  };

    return (
      <>
      <div className='containerAdmin'>
        <h1 className="text-black">Listado de noticias</h1>
        <Link to={`/admin/añadir/horario`}><Button className="flex items-center gap-3 buttonAdd">
                      <img src={Add} alt="ver" className='icons'/><p>Añadir</p>
                      </Button>
                    </Link>
        <div>
          <table>
            <thead>
              <tr>
                <th className='thAdmin'>Localidad</th>
                <th className='thAdmin'>Ubicación</th>
                <th className='thAdmin'>Día</th>
                <th className='thAdmin'>Horario</th>
                <th className='thAdmin'>Edad</th>
                <th className='thAdmin'>Cinturón/Nivel</th>
                <th className='thAdmin'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item) => (
                <tr key={item.id}>
                  <td>{item.city}</td>
                  <td>{item.location}</td>
                  <td>{item.day}</td>
                  <td>{item.timeRange}</td>
                  <td>{item.age}</td>
                  <td>{item.belt}</td>
                  <td>
                    <div id='iconsCell'>
                    <Link to={`/admin/editar/horario/${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
                      <img className='icons'src={Edit} alt="editar"/>
                      </Button>
                    </Link>
                    <Link to={`/ver/${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
                      <img src={View} alt="ver" className='icons'/>
                      </Button>
                    </Link>
                    <Button className="flex items-center gap-3 buttonsCell" onClick={() => deleteSchedule(item.id)}>
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
    );
  };
  
  export default AVscheduleCRUD;