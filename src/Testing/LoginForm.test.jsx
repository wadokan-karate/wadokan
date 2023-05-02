import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from "../components/LoginForm";

test('should render Login tittle', ()=>{
    render(<LoginForm/>);
    const BeltExamnTittle = screen.getByText(/Login/i);
    expect(BeltExamnTittle).toBeInTheDocument();
})

test('should render the logo of wadokan in Login img', ()=>{
    render(<LoginForm/>);
    const Img = screen.getByAltText(/Logo wadokan/i);
    expect(Img).toBeInTheDocument();
    
});