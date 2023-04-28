import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import '../style/loginForm.css'
   
  export default function LoginForm() {
    return (
        <div id="container">
            <div id="logoContainer">
                <img src="src\assets\logo wadokan rect.png" alt="Logo wadokan"/>
            </div>
            <div id="loginContainer">
                <Card color="transparent" shadow={false} >
                <Typography variant="h4" color="blue-gray">
                Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                Escribe tus credenciales para conectarte 
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Nombre" />
                    <Input type="password" size="lg" label="Contraseña" />
                </div>
                <Button className="mt-6" fullWidth>
                    Entrar
                </Button>
                </form>
                </Card>
            </div>
        </div>
    );
  }