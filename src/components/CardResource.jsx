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
import resourceHandler from '../handlers/resourceHandler';
import { Link } from "react-router-dom";
 
export default function Cardblog() {
  const [resource, setResources] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await resourceHandler.loadResources();
    const filteredData = data.filter(resource => resource.isActive === true);
    setResources(filteredData);
  };

  return (
    <>
      {resource.map((item) => (
        <Card className="max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={`data:image/jpg;base64,${item.image}`} alt={item.name}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              {item.name}
            </Typography>
  
            <Link to={`/vistadetalle/${item.id}`}><Button className=" bg-wadokanBlue m-auto mt-3">Ver Recurso</Button>
            </Link>
          </CardBody>
          {/* <CardFooter className="flex items-center justify-between">
            
            <Typography className="font-normal">January 10</Typography>
          </CardFooter> */}
        </Card>
      ))}
    </>
  );

}