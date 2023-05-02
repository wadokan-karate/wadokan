import React, { useState, useEffect,  } from 'react';
import resourceHandler from '../handlers/resourceHandler';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import View from '../assets/img/ver.png';
import Edit from '../assets/img/editar.png';
import Add from '../assets/img/add.png';
import Delete from '../assets/img/eliminar.png';
import ReactPlayer from 'react-player';
import "../style/AV.css"
import "../index.css"


const AVresourcesCRUD = () => {
  const [resource, setResources] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await resourceHandler.loadResources();
    const filteredData = data.filter(event => event.isActive === true);
    setResources(filteredData);
  };

  const deleteResource = async (id) => {
    setResources(resource.filter((p) => p.id !== id));
    await resourceHandler.deleteResource(id);
  };

  return (
    <>
    <div className='containerAdmin'>
      <h1 className="text-black">Listado de recursos</h1>
      <Link to={`/admin/añadir/recursos`}><Button className="flex items-center gap-3 buttonAdd">
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
            {resource.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                
                <td>
                  <div id='iconsCell'>
<<<<<<< HEAD
                  <Link to={`/admin/recursos/editar//${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
=======
                  <Link to={`/admin/editar/recursos/${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
>>>>>>> dev
                    <img className='icons'src={Edit} alt="editar"/>
                    </Button>
                  </Link>
                  <Link to={`/blog-recursos`}><Button className="flex items-center gap-3 buttonsCell">
                    <img src={View} alt="ver" className='icons'/>
                    </Button>
                  </Link>
                  <Button className="flex items-center gap-3 buttonsCell" onClick={() => deleteResource(item.id)}>
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

export default AVresourcesCRUD;