import React from "react";
import {render, screen} from '@testing-library/react';
import ContactForm from '../components/ContactForm';
import '@testing-library/jest-dom'

test ('there is a button', ()=>{
    vi.mock('react-router-dom', () =>({
        useLoaderData: vi.ContactForm()
    }))
    render(<ContactForm show={true} />)
    screen.debug()
    const button = screen.getByText(/Enviar/i);
    expect(button).toBeInTheDocument();
})