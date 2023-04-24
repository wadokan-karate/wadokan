import React from "react";
import ClubHistory from '../components/ClubHistory'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('should contain an image element', ()=> {
    render(<ClubHistory/>);
    const ImageElement = screen.getByAltText(/banner apartado nuestro club/i);
    expect(ImageElement).toBeInTheDocument();
})

test('should render a club history img', ()=>{
    render(<ClubHistory/>);
    const Img = screen.getByAltText(/Img de la historia de nuestro club/i);
    expect(Img).toBeInTheDocument();
    
});