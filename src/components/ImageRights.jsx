import "../components/style/ImageRights.css";

const ImageRights = () => {

    return (
    <>

        <div className=" ContainerImageRights bg-brown-300">
        
         
         <h1 className="text-black mt-14 text-3xl">AUTORIZACIÓN DE DERECHOS DE IMAGEN</h1>
        
         <h2 className=" text-start Header2 font-bold text-lg ">QUÉ ES Y PARA QUÉ SIRVE</h2>
 
         <p className="text-md mt-4 text-lg"> El formulario de autorización de derechos de imagen es un documento que otorga permiso para utilizar la imagen de una persona en diferentes contextos, como en fotografías, videos, publicaciones en redes sociales, publicidad y otros medios.
         <br /> <br /> En el contexto de las clases de karate para sus hijos, la firma del formulario permite que el club de karate utilice imágenes o videos en los que su hija aparezca durante las clases o eventos de karate en las redes sociales, sitio web del club, boletines informativos y otros medios promocionales.
         <br /> <br /> Es importante que lea detenidamente el formulario y comprenda los términos y condiciones antes de firmarlo. Si tiene alguna pregunta o inquietud acerca de cómo se utilizarán las imágenes de su hija, no dude en preguntar al personal del club de karate antes de firmar el formulario.
              
         </p>

         <p className=" text-center text-md mt-8 text-md text-red-800 font-semibold "> IMPORTANTE FIRMAR DOCUMENTO PDF Y SUBIR ARCHIVO EN EL FORMULARIO</p>
 
         <div className='Solicitud bg-wadokanBlue text-center mt-8 ml-80 mr-80 pt-2 pb-2 rounded-md font-bold hover:text-gray-200'>
           <a className=' hover:text-white' href="https://forms.gle/XC9RB8oQSHxWjh4s7" target='_blank'>
             PINCHA AQUÍ PARA RELLENAR EL FORMULARIO
           </a>
         </div>         

         <h2 className=" text-start Header2 font-bold text-lg ">DOCUMENTACIÓN IMPORTANTE E INFORMACIÓN ADICIONAL</h2>   


        </div>
      
    </>
    );
};

export default ImageRights;