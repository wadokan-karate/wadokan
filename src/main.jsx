import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/Router';
import { UserProvider } from './contexts/UserContext';
 import { RouterProvider } from 'react-router-dom';
import { AxiosInterceptor } from './Interceptors/axios.interceptor'
import { ThemeProvider } from "@material-tailwind/react";
AxiosInterceptor();

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <UserProvider >
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
    </UserProvider>

  </React.StrictMode>,
)

