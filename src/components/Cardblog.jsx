import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  
} from "@material-tailwind/react";
import { Button } from "flowbite-react";
import React, { useState, useEffect } from 'react';
import eventHandler from '../handlers/eventHandler';
import { Link } from "react-router-dom";
import '../style/cardblog.css'
 
export default function Cardblog() {
  const [event, setEvents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await eventHandler.loadEvents();
    const filteredData = data.filter(event => event.isActive === true);
    setEvents(filteredData);
  };

  return (
    <>
      {event.map((item) => (
        <Card className="max-w-[24rem] overflow-hidden m-2">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img id="cardImage"
              src={`data:image/jpg;base64,${item.image}`} alt={item.name}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              {item.name}
            </Typography>
  
            <Link to={`/vistadetalle/${item.id}`}><Button className=" bg-wadokanBlue m-auto mt-3">Leer artículo</Button>
            </Link>
          </CardBody>
          
        </Card>
      ))}
    </>
  );

}