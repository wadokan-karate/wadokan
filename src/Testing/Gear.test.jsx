import Gear from "../components/Gear";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";

test('should render gear tittle', ()=>{
    render(<Gear/>);
    const GearTittle = screen.getByText(/LA EQUIPACIÓN/i);
    expect(GearTittle).toBeInTheDocument();
});


test('should render a gear img', ()=>{
    render(<Gear/>);
    const Img = screen.getByAltText(/Equipación, primera imagen/i);
    expect(Img).toBeInTheDocument();
    
});