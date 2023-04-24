import "../components/style/LicencesInfo.css";
import FederacionLogos from "../assets/FederacionLogos.png";

const LicensesInfo = () => {
  
    return (
      <div className=" ContainerLicences text-center w-full mb-6">
        
         
      <h1 className="text-black mt-14 text-3xl">LICENCIA FEDERATIVA</h1>
      
      <h2 className=" text-start Header2 font-bold text-lg ">QUÉ ES Y PARA QUÉ SIRVE</h2>

      <p className="text-md mt-4 text-lg"> 
       </p>

       <ul className=" KarateList text-black text-md mt-4 text-lg"> Estas son algunas ventajas de examinar de cinturón:

        <li className=" KarateList text-black text-md  text-lg">Estimulan el aprendizaje</li>
        <li className=" KarateList text-black text-md  text-lg">Fomentan la disciplina</li>
        <li className=" KarateList text-black text-md  text-lg">Desarrollan la autoconfianza</li>
        <li className=" KarateList text-black text-md  text-lg">Fomentan la competición sana</li>

       </ul>      
       

      <h2 className=" text-center Header2Bottom font-bold text-lg" >CÓMO SOLICITARLA</h2>
       
      <p className="text-md mt-4 text-lg ">Para poder presentarte a los diferentes exámenes de cinturón negro, tendrás que acceder a la página web de la Federación Andaluza de Karate (FAK) y cumplimentar el formulario que aparece en la web.</p>
     
     <div className='Solicitud bg-wadokanBlue text-center mt-8 ml-80 mr-80 pt-2 pb-2 rounded-md font-bold hover:text-gray-200'>
      <a className=' hover:text-white' href="https://fankarate.com/noticias/actualidad/incorpora-tu-foto-tu-ficha-deportiva/" target='_blank'>
       CAMBIA TU FOTO</a>
     </div>  

     <h2 className=" text-center Header2Bottom font-bold text-lg pt-5" >INFORMACIÓN IMPORTANTE</h2>   
     <p className="text-md mt-4 text-lg ">En el siguiente enlace te adjuntamos el archivo PDF que corresponde con la normativa oficial de la Federación Española de Karate (RFEK). En él apararecerá lo que te tienes que preparar para tu examen de cinturón negro. </p>

     <div className=" border-8 mt-10 border-grey"> <img src={FederacionLogos} alt="Descripción de la imagen" /></div>
            

      </div>
   
      );
  };
  
  export default LicensesInfo;