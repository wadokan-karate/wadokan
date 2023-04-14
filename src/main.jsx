import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/Router';
import { RouterProvider } from 'react-router-dom';
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider>
    <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
