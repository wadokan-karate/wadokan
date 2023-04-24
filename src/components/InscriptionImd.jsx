import "../components/style/InscriptionImd.css";
import React, { useState, useEffect } from "react";

const InscriptionImd = () => {

  // Funcionalidad para mostrar diferentes opciones:

  const [options, setOptions] = useState([
    { value: "movistar", text: "Movistar" },
    { value: "claro", text: "Claro" },
    { value: "entel", text: "Entel" },
    { value: "bitel", text: "Bitel" }
  ]);

  useEffect(() => {
    const select = document.getElementById("subject");
    options.forEach(option => {
      const el = document.createElement("option");
      el.textContent = option.text;
      el.value = option.value;
      select.appendChild(el);
    });
  }, []);


  // Funcionalidad para escoger dia, mes y año:

  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");

  function handleDiaChange(event) {
    setDia(event.target.value);
  }

  function handleMesChange(event) {
    setMes(event.target.value);
  }

  function handleAnioChange(event) {
    setAnio(event.target.value);
  } 

  
    return (
      <>
       <div className="ContainerIMD text-center w-full">

       <section className=" dark:bg-gray-900 text-start">

          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

            <h2 className="TitleForm mb-10 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Inscripción Campeonatos IMD</h2>

            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg"> En este formulario podrás enviar los datos de tu hijo a nuestro correo. Gracias a esto las profes tendrán una información más clara de cada alumno para hacer la inscripción oficial al campeonato, muchas gracias !
            
            <br /> <br /> *Todos los campos son obligatorios*</p>

            <form action="https://formsubmit.co/ef4f1ed50a256535f4e05d0cb2fa7041" method="POST" className="space-y-8">
             
              <div>
                <label htmlFor="subject" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                <input type="text" id="subject" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Escribe aqui el nombre" required />
              </div>

               
              <div>
                <label htmlFor="subject" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Apellidos</label>
                <input type="text" id="subject" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Escribe aqui los dos apellidos" required />
              </div>


              <div>
                 <label htmlFor="subject" className="block text-start mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Color del Cinturón</label>
                 <select type="select" id="subject" name="options" className="block text-start pl-2 w-full text-sm m-0 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" defaultValue="Cinturón Blanco" 
                   required 
                   placeholder="Escoge el color del Cinturón"
                   style={{ color: "gray" }} >

                     <option value="" className="HiddenOption">-Escoge el color del Cinturón-</option>
                     <option value="Blanco">Cinturón Blanco</option>
                     <option value="Blanco-Amarillo">Cinturón Blanco-Amarillo</option>
                     <option value="Amarillo">Cinturón Amarillo</option>
                     <option value="Amarillo-Naranja">Cinturón Amarillo-Naranja</option>
                     <option value="Naranja">Cinturón Naranja</option>
                     <option value="Naranja-Verde">Cinturón Naranja-Verde</option>
                     <option value="Verde">Cinturón Verde</option>
                     <option value="Verde-Azul">Cinturón Verde-Azul</option>
                     <option value="Azul">Cinturón Azul</option>
                     <option value="Azul-Marrón">Cinturón Azul-Marrón</option>
                     <option value="Marrón">Cinturón Marrón</option>
                     <option value="Negro">Cinturón Negro</option>
                     
                                  
                 </select>
              </div>

              <div>
                <label htmlFor="fechaNacimiento" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                  Fecha de Nacimiento del/la Participante
                </label>
                <div className="flex">
                 <input type="text" id="dia" name="dia" value={dia} onChange={handleDiaChange} className="shadow-sm w-16 mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="dd" maxLength="2" required />
                 <input type="text" id="mes" name="mes" value={mes} onChange={handleMesChange} className="shadow-sm w-16 mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="mm" maxLength="2" required />
                 <input type="text" id="anio" name="anio" value={anio} onChange={handleAnioChange} className="shadow-sm w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="aaaa" maxLength="4" required />
                </div>
              </div>

              <div>
                 <label htmlFor="subject" className="block text-start mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Lugar donde recibe las clases</label>
                 <select type="select" id="subject" name="options" className="block text-start pl-2 w-full text-sm m-0 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" defaultValue="Cinturón Blanco" 
                   required 
                   placeholder="Escoge Lugar de Entrenamiento"
                   style={{ color: "gray" }} >

                     <option value="" className="HiddenOption">-Escoge Lugar de Entrenamiento-</option>
                     <option value="Piscina">Montequinto-Piscina Cubierta</option>
                     <option value="Polideportivo">Montequinto-Polideportivo</option>
                     <option value="Condequinto">Montequinto-Asociación de vecinos Condequinto</option>
                     <option value="Los Palacios">Los Palacios-Juan Sánchez</option>
                     <option value="Pakos">Dos Hermanas-Pako´s Gym</option>            
                     <option value="Velódromo">Dos Hermanas-Velódromo</option>       
                                  
                 </select>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">e-mail del tutor legal</label>
                <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Teléfono móvil</label>
                <input type="text" id="subject" name="mobile" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="666123456" required />
              </div>            

             <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Información Adicional Sobre su Hijo/Hija</label>
                <textarea id="message"  name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Escribe aquí tu mensaje..." defaultValue={""} />
             </div>
             
             <div className="flex items-center gap-2">
                <checkbox id="agree" />
                <label htmlFor="agree">I agree with the
                  <a href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">
                  terms and conditions
                  </a>
                </label>
             </div>

             <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-wadokanBlue sm:w-fit hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600">Enviar</button>

             <input type="hidden" name="_next" value="http://localhost:5173/formularioenviado"></input>
            </form>
          </div>
       </section>

       </div>
     </>
    );
  };
  
  export default InscriptionImd;

  