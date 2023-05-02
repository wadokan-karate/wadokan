import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import BeltExams from '../components/BeltExams'


test('should render gear p', ()=>{
    render(<BeltExams/>);
    const BeltExamnP = screen.getByText(/En el karate, los cinturones indican el nivel de habilidad y conocimiento que tiene el alumno en la disciplina. Son pruebas que los alumnos deben pasar para demostrar que han adquirido los conocimientos y habilidades necesarias para avanzar al siguiente nivel./i);
    expect(BeltExamnP).toBeInTheDocument();
});