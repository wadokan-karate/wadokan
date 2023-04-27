import React, { useState, useEffect } from 'react';
import resourceHandler from '../handlers/resourceHandler';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import View from '../assets/img/ver.png';
import Edit from '../assets/img/editar.png';
import Add from '../assets/img/add.png';
import Delete from '../assets/img/eliminar.png';
import ReactPlayer from 'react-player';
import "./style/AV.css"
import "../index.css"


const AVresourcesCRUD = () => {
  const [resource, setResources] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await resourceHandler.loadResources();
    setResources(data);
  };

  const deleteResource = async (id) => {
    setResources(resource.filter((p) => p.id !== id));
    await resourceHandler.deleteResource(id);
  };

  return (
    <>
    <div className='containerAdmin'>
      <h1 className="text-black">Listado de recursos</h1>
      <Link to={`/admin/addResource`}><Button className="flex items-center gap-3 buttonAdd">
                    <img src={Add} alt="ver" className='icons'/><p>Añadir</p>
                    </Button>
                  </Link>
      <div>
        <table>
          <thead>
            <tr>
              <th className='thAdmin'>Nombre</th>
              <th className='thAdmin'>Video</th>
              <th className='thAdmin'>Video</th>
              <th className='thAdmin'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {resource.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td >
                  <ReactPlayer url={item.video} light={true} width="20vw" height="23vh" />
                </td>
                <td ><img id='tdAdminPhoto' src={`data:image/jpg;base64,${item.image}`} alt={item.name} /></td>
                <td>
                  <div id='iconsCell'>
                  <Link to={`/admin/recursos/editar//${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
                    <img className='icons'src={Edit} alt="editar"/>
                    </Button>
                  </Link>
                  <Link to={`/ver/${item.id}`}><Button className="flex items-center gap-3 buttonsCell">
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
