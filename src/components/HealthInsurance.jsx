import React from "react";
import SeguroMedico from "../assets/img/seguroMedico.png";


const HealthInsurance = () => {
  
    return (

     
      <div className=" ContainerHealth bg-brown-300 text-center w-full">
         <img src={SeguroMedico} alt="Descripción de la imagen" />
         
       <h1 className="text-black mt-8">SEGURO DEPORTIVO</h1>
       <h2>PROTOCOLO DE ACTUACIÓN EN CASO DE ACCIDENTES</h2>
       <p></p>
      </div>

    );
  };
  
  export default HealthInsurance;