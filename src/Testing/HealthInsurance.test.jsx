import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HealthInsurance from "../components/HealthInsurance";
import { HelperText } from "flowbite-react";


test('should render HealthInsurance p', ()=>{
    render(<HealthInsurance/>);
    const HealthInsuranceText = screen.getByText(/El seguro deportivo es un tipo de seguro que se contrata para cubrir los gastos médicos en caso de lesiones o accidentes durante la práctica de deportes. En el caso del karate, es especialmente importante tener un seguro deportivo ya que es una disciplina que involucra mucho movimiento y contacto físico. Al contratar un seguro deportivo para tu hijo, estarás asegurándote de que si llega a tener algún tipo de lesión mientras practica karate, los gastos médicos serán cubiertos por el seguro. Esto incluye visitas al médico, tratamiento médico, hospitalización, cirugía y rehabilitación./i);
    expect(HealthInsuranceText).toBeInTheDocument();
})


test('should render a HealthInsurance img', ()=>{
    render(<HealthInsurance/>);
    const Img = screen.getByAltText(/Img de una mano vendada/i);
    expect(Img).toBeInTheDocument();
    
});