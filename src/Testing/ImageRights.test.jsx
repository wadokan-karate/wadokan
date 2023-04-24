

import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageRights from "../components/ImageRights"

test('should render Belt examns tittle', ()=>{
    render(<ImageRights/>);
    const Imagetext = screen.getAllByText(/Formulario de Consentimiento Para uso de Fotografías y Vídeos/i);
})