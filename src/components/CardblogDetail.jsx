import { Card } from "flowbite-react";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import eventHandler from '../handlers/eventHandler';
import { Link } from "react-router-dom";
import '../style/CardblogDetail.css'

  export default function CardblogDetail() {
    const {id} = useParams();
    const [event, setEvent] = useState([null])

  useEffect(() => {
    async function fetchEvent() {
      const eventData = await eventHandler.loadEvent(id);
      setEvent(eventData);
    }
    fetchEvent();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }
  
  const { name, image, description }= event;

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
                <Link to="/blog-recursos" style={{textDecoration:'none', textAlign: 'center'}}><input id="return" type="button" value="VOLVER" /></Link>
            </Card>
            
      </Card>
    );
  }


