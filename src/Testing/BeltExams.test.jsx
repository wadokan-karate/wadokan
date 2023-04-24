import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import BeltExams from '../components/BeltExams'

test('should render Belt examns tittle', ()=>{
    render(<BeltExams/>);
    const BeltExamnTittle = screen.getAllByText(/EXÁMENES DE CINTURÓN/i);
})