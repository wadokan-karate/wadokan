

// import React from "react";
// import {render, screen} from '@testing-library/react';
// import '@testing-library/jest-dom';
// import ImageRights from "../components/ImageRights"

// test('should image rigths tittle', ()=>{
//     render(<ImageRights/>);
//     const Imagetext = screen.getAllByText(/AUTORIZACIÓN DE DERECHOS DE IMAGEN/i);
//     expect(Imagetext).toBeInTheDocument();
// })

import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageRights from "../components/ImageRights";



test('should render ImageRights h1', ()=>{
    render(<ImageRights/>);
    const ImageRightsTittle = screen.getByText(/QUÉ ES Y PARA QUÉ SIRVE/i);
    expect(ImageRightsTittle).toBeInTheDocument();
})
