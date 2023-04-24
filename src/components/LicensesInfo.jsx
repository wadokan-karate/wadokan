import "../components/style/LicencesInfo.css";
import FederacionLogos from "../assets/FederacionLogos.png";

const LicensesInfo = () => {
  
    return (
      <div className=" ContainerLicences text-center w-full p-4 mb-6">
        
         
      <h1 className="text-black mt-14 text-3xl">LICENCIA FEDERATIVA</h1>
      
      <h2 className=" text-start Header2 font-bold text-lg ">QUÉ ES Y PARA QUÉ SIRVE</h2>

      <p className="text-md mt-4 text-lg">
      La licencia federativa es un documento que acredita que el deportista está inscrito en la federación deportiva correspondiente para mantener un registro organizado de los deportistas en la federación, así como para permitir su participación en eventos y competiciones oficiales.
      <br /><br />
      Es importante para garantizar la seguridad y bienestar del deportista, así como para permitir al niño o joven participar en competencias oficiales, asistir a eventos y entrenamientos organizados por la federación, y además, garantiza que el deportista esté cubierto por un seguro médico en caso de accidente durante las competencias o entrenamientos.
      <br /> <br />
      Por último, es importante destacar que para que el cinturón tenga validez oficial es necesario que el participante esté federado en una entidad deportiva. Por esta razón, la licencia federativa es un requisito indispensable para poder participar en competiciones y eventos oficiales de karate
      </p>

      <h2 className=" text-start Header2 font-bold text-lg ">¿QUÉ HAGO PARA QUE MI HIJO SE DE DE ALTA?</h2>

       <ul className=" KarateList text-black text-md mt-4 text-lg"> Es importante destacar que la licencia se deberá renovar una vez al año y tiene un coste de 45Eur/año. Debe seguir los siguientes pasos: <br /><br />

        <li className=" KarateList text-black text-md  text-lg">Cumplimentar la solicitud (Esta solicitud se encuentra al final de la página, tendrá que descargarla)</li>
        <li className=" KarateList text-black text-md  text-lg">Hacer una transferencia a la cuenta del club o pagar a los monitores correspondientes en el lugar de entrenamiento (Al final de la página tiene disponible el IBAN)</li>
        <li className=" KarateList text-black text-md  text-lg">Adjuntar Comprobante de pago</li>
        <li className=" KarateList text-black text-md  text-lg">Si es la Primera vez que solicita la licencia: <br /> <br /> Deberá acceder al enlace donde indica "CAMBIA TU FOTO",  éste le redirigirá a la página web de la federación dónde podrá insertar una foto, que será la que aparezca en la lincencia federativa.</li>
        <li className=" KarateList text-black text-md  text-lg">Cuando hayas terminado todos estos pasos adjuntar los documentos necesarios en un correo y enviarlo al e-mail del club</li>

        <p className=" text-center m-0 mt-3 text-wadokanBlue font-semibold">KarateWadokanSev@gmail.com</p>
        <p className=" text-center m-0 mt-3 text-wadokanBlue font-semibold">IBAN:---------------------</p>


       </ul>      
       
     
     <div className='Solicitud bg-wadokanBlue text-center mt-8 ml-80 mr-80 pt-2 pb-2 rounded-md font-bold hover:text-gray-200'>
      <a className=' hover:text-white' href="https://fankarate.com/noticias/actualidad/incorpora-tu-foto-tu-ficha-deportiva/" target='_blank'>
       CAMBIA TU FOTO</a>
     </div>  

     <h2 className=" text-center Header2Bottom font-extrabold text-xl pt-5" >INFORMACIÓN IMPORTANTE</h2>   
     <p className="text-md mt-4 text-lg ">En el siguiente enlace te adjuntamos los archivos PDF necesarios para cumplimentar la solicitud. </p>

     <div className=" border-8 mt-10  border-grey"> <img src={FederacionLogos} alt="Descripción de la imagen" /></div>
            

      </div>
   
      );
  };
  
  export default LicensesInfo;