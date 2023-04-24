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

test ('should render the second gear img', ()=>{
    render(<Gear/>);
    const Img2 = screen.getByAltText(/Equipación, segunda imagen/i);
    expect(Img2).toBeInTheDocument();
})