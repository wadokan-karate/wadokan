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
   
  export default function Cardblog() {
    return (
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            Blog Tittle
          </Typography>

          <Button className=" bg-wadokanBlue m-auto mt-3">Leer artículo</Button>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between">
          
          <Typography className="font-normal">January 10</Typography>
        </CardFooter> */}
      </Card>
    );
  }