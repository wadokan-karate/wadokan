import { Card } from "flowbite-react";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import resourceHandler from '../handlers/resourceHandler';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

  export default function CardResourceDetail() {
    const {id} = useParams();
    const [resource, setResource] = useState([null])
console.log (resource)
  useEffect(() => {
    async function fetchResource() {
      const resourceData = await resourceHandler.loadResource(id);
      setResource(resourceData);
    }
    fetchResource();
  }, [id]);

  if (!resource) {
    return <div>Loading...</div>;
  }
  
  const { name, image, description, video } = resource;

    return (
        <Card href="#">
            
            <Card  className=" w-3/4 h-1/5 m-auto">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
            </h1>
                <div className="w-fit h-1/4 m-auto">
                <img src={`data:image/jpg;base64,${image}`} alt={name} />
                </div>

                <p className="font-normal text-gray-700 dark:text-gray-400 m-auto">
                {description}
                </p>
                <div className="Video">
                   <ReactPlayer url={video} />
                </div>
                <Link to= "/blog-recursos" style={{textDecoration:'none', textAlign: 'center'}}><input id="return" type="button" value="VOLVER" /></Link>
            </Card>
      </Card>
    );
  }