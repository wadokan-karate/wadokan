import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HealthInsurance from "../components/HealthInsurance";


test('should render HealthInsurance h2 tittle', ()=>{
    render(<HealthInsurance/>);
    const HealthInsuranceText = screen.getAllByText(/SEGURO DEPORTIVO/i);
})


test('should render a HealthInsurance img', ()=>{
    render(<HealthInsurance/>);
    const Img = screen.getByAltText(/Img de una mano vendada/i);
    expect(Img).toBeInTheDocument();
    
});