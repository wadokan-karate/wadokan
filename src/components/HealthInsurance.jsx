import React from "react";
import SeguroMedico from "../assets/img/seguroMedico.png";
import '../style/HealthInsurance.css'


const HealthInsurance = () => {

 
  
    return (

     
      <div className=" ContainerHealth">
        
         
       <h1 className="text-black mt-14 text-3xl">SEGURO DEPORTIVO</h1>
       
       <h2 className=" text-start Header2 font-bold text-lg ">QUÉ ES Y PARA QUÉ SIRVE</h2>

       <p className="text-md mt-4 text-lg">El seguro deportivo es un tipo de seguro que se contrata para cubrir los gastos médicos en caso de lesiones o accidentes durante la práctica de deportes. En el caso del karate, es especialmente importante tener un seguro deportivo ya que es una disciplina que involucra mucho movimiento y contacto físico.
       Al contratar un seguro deportivo para tu hijo, estarás asegurándote de que si llega a tener algún tipo de lesión mientras practica karate, los gastos médicos serán cubiertos por el seguro. Esto incluye visitas al médico, tratamiento médico, hospitalización, cirugía y rehabilitación. <br /> <br />
       En resumen, el seguro deportivo es una forma de proteger a tu hijo mientras practica deportes, como el karate. Cubre los gastos médicos en caso de lesiones y puede ayudar a compensar otros gastos relacionados con el deporte. Es importante asegurarte de que tu hijo tenga un seguro deportivo para que puedas tener la tranquilidad de que estará protegido mientras disfruta de su actividad deportiva.
                
       </p>

       <h2 className=" text-start Header2 font-bold text-lg" >PROTOCOLO DE ACTUACIÓN</h2>

       <p className="text-md mt-4 text-lg">
       La Federación Andaluza de Karate y Disciplinas Asociadas y la Aseguradora Allianz-Clínicas Beiman, han presentado una nueva guía para facilitar al máximo a los/as deportistas el proceso de actuación a seguir en caso de accidente durante la competición o actividad deportiva, entrenamiento o desplazamiento dentro del ámbito federativo.
       <br /> <br />
       Si eres federado/a y sufres un accidente de estas características, debes seguir estos pasos:
       
       </p>

       <p className=" text-md mt-4 text-lg text-wadokanBlue font-bold ">Llamar a la mayor brevedad posible al teléfono de contacto de Allianz Beiman 677 808 817 / 954 027 032, donde te orientarán por el personal sanitario especializado sobre el mejor procedimiento a seguir para la correcta atención de su accidente. El parte deberá ser comunicado y enviado como máximo en los 7 días posteriores desde la fecha en la que se produce el accidente. </p>
       
       
       <h2 className=" text-start Header2 font-bold text-lg" >EN CASO DE ACCIDENTE</h2>

       <ul className=" KarateList text-black text-md mt-4 mb-3 pb-3 text-lg"> En caso de accidente habrá que adjuntar al correo electrónico de la Delegación Sevillana de Karate los siguientes documentos:

         <li className=" KarateList text-black text-md  text-lg">Ficha federativa</li>
         <li className=" KarateList  text-black text-md  text-lg">Hora y lugar del accidente</li>
         <li className=" KarateList  text-black text-md  text-lg">Descripción del accidente</li>
         <li className=" KarateList  text-black text-md  text-lg">Zona afectada</li>

        </ul>

        <p className=" text-wadokanBlue text-center mb-14 text-md mt-4 text-lg font-semibold">Correo de la Delegación Sevillana: sevillakarate@gmail.com</p>
         
       <p className="text-md mt-4 mb-14 text-lg ">Para consultar con más detalle Descargar el documento oficial PDF que se adjunta a continuación:</p>

      <div className=" text-center mb-16 text-lg font-semibold">
       <a className="w-4 h-4 px-2 py-2 bg-wadokanBlue  text-grey  hover:text-white' : 'text-grey hover:bg-gray-700 hover:text-white rounded-md" href="https://drive.google.com/file/d/1nYe3013W6hbUxBeDfRiJyoQhWFfbuHAw/view?usp=sharing" target="_blank">Protocolo de Actuación</a>
      </div>    

      <p className="font-semibold ">*Aquellos deportistas que participan en la Liga IMD también existe un protocolo de actuación y un seguro de accidentes deportivos. Accede al enlace con la explicación debajo de este texto:</p>

      <div className='Solicitud bg-wadokanBlue text-center mt-12 ml-80 mr-80 pt-2 pb-2 rounded-md font-bold hover:text-gray-200'>
      <a className=' hover:text-white' href="https://imd.sevilla.org/informacion-imd/seguro-de-accidentes-deportivos" target='_blank'>
       ENLACE SEGURO DEPORTIVO IMD</a>
     </div> 

       <div> <img src={SeguroMedico} className="Healthimg" alt="Img de una mano vendada" /></div>
       </div>
    );
  };
  
  export default HealthInsurance;