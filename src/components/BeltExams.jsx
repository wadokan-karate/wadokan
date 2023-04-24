import '../components/style/BeltExams.css';
import cintosnegros from "../assets/img/cintosnegros.png";

  const BeltExams = () => {
  
    return (
      
      <div className=" ContainerHealth bg-brown-300 text-center w-full">
        
         
       <h1 className="text-black mt-14 text-3xl">EXÁMENES DE CINTURÓN</h1>
       
       <h2 className=" text-start Header2 font-bold text-lg ">QUÉ SON Y PARA QUÉ SIRVEN</h2>

       <p className="text-md mt-4 text-lg"> En el karate, los cinturones indican el nivel de habilidad y conocimiento que tiene el alumno en la disciplina. Son pruebas que los alumnos deben pasar para demostrar que han adquirido los conocimientos y habilidades necesarias para avanzar al siguiente nivel.
        <br /> <br />
       
        Por ejemplo, los alumnos comienzan con un cinturón blanco y, a medida que van aprendiendo y avanzando, pueden ir obteniendo cinturones de colores más oscuros (amarillo, naranja, verde, etc.) hasta llegar al cinturón negro, que es el más alto.
         <br /><br />
         Estos exámenes son importantes porque no solo indican el progreso del alumno, sino que también fomentan la disciplina, la perseverancia y la autoconfianza. Los alumnos deben prepararse diligentemente para los exámenes de cinturón, lo que les enseña la importancia del trabajo duro y el esfuerzo constante para alcanzar sus objetivos.
         <br /><br />
         Por tanto, los exámenes de cinturón son una parte importante del karate porque indican el progreso del alumno y fomentan valores como la disciplina, la perseverancia y la autoconfianza. También fomentan la competencia sana y la camaradería entre los alumnos.
        </p>

        <ul className=" KarateList text-black text-md mt-4 text-lg"> Estas son algunas ventajas de examinar de cinturón:

         <li className=" KarateList text-black text-md  text-lg">Estimulan el aprendizaje</li>
         <li className=" KarateList text-black text-md  text-lg">Fomentan la disciplina</li>
         <li className=" KarateList text-black text-md  text-lg">Desarrollan la autoconfianza</li>
         <li className=" KarateList text-black text-md  text-lg">Fomentan la competición sana</li>

        </ul>      
        

       <h2 className=" text-center Header2Bottom font-bold text-lg" >SOLICITUD EXAMEN CINTO NEGRO</h2>
        
       <p className="text-md mt-4 text-lg ">Para poder presentarte a los diferentes exámenes de cinturón negro, tendrás que acceder a la página web de la Federación Andaluza de Karate (FAK) y cumplimentar el formulario que aparece en la web.</p>
      
      <div className='Solicitud bg-wadokanBlue text-center mt-8 pt-2 pb-2 rounded-md font-bold hover:text-gray-200'>
       <a className=' hover:text-white' href="https://fankarate.com/disciplina/karate/solicitud-examen-cinturon-negro/" target='_blank'>
        ENLACE DE LA SOLICITUD</a>
      </div>  

      <h2 className=" text-center Header2Bottom font-bold text-lg pt-5" >NORMATIVA DEL EXAMEN</h2>   
      <p className="text-md mt-4 text-lg ">En el siguiente enlace te adjuntamos el archivo PDF que corresponde con la normativa oficial de la Federación Española de Karate (RFEK). En él apararecerá lo que te tienes que preparar para tu examen de cinturón negro. </p>
             
       <div> <img src={cintosnegros} className="Healthimg" alt="Descripción de la imagen" /></div>
       </div>
    );
  };
  
  export default BeltExams;