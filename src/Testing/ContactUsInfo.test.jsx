import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUsInfo from "../components/ContactUsInfo";

test('should render ContactUsInfo h2 tittle', ()=>{
    render(<ContactUsInfo/>);
    const ContactUsTittle = screen.getByText(/¡Encuentranos!/i);
})