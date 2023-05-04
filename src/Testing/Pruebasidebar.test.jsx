import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Pruebasidebar from "../components/Pruebasidebar";


test('should render Pruebasidebar tittle', ()=>{
    render(<Pruebasidebar/>);
    const pruebasidebarTittle = screen.getByText(/CATEGORIAS/i);
    expect(pruebasidebarTittle).toBeInTheDocument();
})
