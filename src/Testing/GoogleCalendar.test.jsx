import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import GoogleCalendar from "../components/GoogleCalendar";

test('should render google calendar tittle', ()=>{
    render(<GoogleCalendar/>);
    const googleCalendarTittle = screen.getAllByText(/CALENDARIO ANUAL DE EVENTOS/i);
})