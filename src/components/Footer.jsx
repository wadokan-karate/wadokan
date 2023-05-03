// import facebook from '../assets/img/facebook.png'
// import instagram from '../assets/img/instagram.png'
// import youtube from '../assets/img/youtube.png'
// import twitter from '../assets/img/twitter.png'
import { Link } from 'react-router-dom';
import "../style/Footer.css";
import "../index.css";
import React from "react";
import FooterLogo from '../assets/FooterLogo.png'


export default function Footer(){
    return (

       <>   
      
         <footer className=" bg-wadokanBlue">

           <div className="mx-auto w-full container">

             <div className='flex-row'>
               <img className=' ImgFooter pt-9' src={FooterLogo} alt="logo"/>
        

                <div className="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3">
            
            
                   <div className='Options'>
            
                      <ul className="text-dark font-semibold">
                          <li className="mb-4">
                            
                            <a href="/nuestro-club"><h2 className='text-2xl' >INFORMACION</h2></a>
                
                          </li>
             
                       </ul>
                   </div>

                   <div className='Options'>
           
                      <ul className="text-dark font-semibold">
                
                          <li className="mb-4">

                             <a href="/licencias"><h2 className='text-2xl'>LINKS DE INTERES</h2></a>

                          </li>
                      </ul> 
                   </div>

                   <div className='Options'>
         
                      <ul className="text-dark font-semibold">
                          <li className="mb-4">

                            <a href="/contacto"><h2 className='text-2xl'>CONTACTO</h2></a>

                          </li>
              {/* <li className="mb-4">
                <a href="#" className="hover:underline">Contact us</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Discounts & promotions</a>
              </li> */}
                      </ul>
                   </div>

              </div>
             </div>
           </div>


           <div className="px-4 py-6 bg-orange items-center">

              <div className=" IconsBox flex mb-6  space-x-6 sm:justify-center md:mt-0 mr-3 ">
                <a href="https://www.facebook.com/people/Karate-Wadokan-Dos-Hermanas/100063655906913/" target="_blank" className="text-dark hover:text-gray-900 dark:hover:text-white">
                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                   <span className="sr-only">Facebook page</span>
                </a>

                <a href="https://www.instagram.com/karatewadokan/" target="_blank" className="text-dark hover:text-gray-900 dark:hover:text-white">
                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                   <span className="sr-only">Instagram page</span>
                </a>
          
                <a href="https://www.youtube.com/@KarateWadokanSevilla/featured" target='_blank' className="text-dark hover:text-gray-900 dark:hover:text-white">
                   <svg xmlns="http://www.w3.org/2000/svg"className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                   </svg>
                </a>

              </div>

              <div className='Leagalidad flex justify-between'>
                 <span className="text-sm text-black sm:text-center ">©Copyright 2023 Karate Wadokan | Todos los derechos reservados.</span>
                 <div id="legal" className=' space-x-9 items-end'>
                    <Link to="/aviso-legal" id="politica" className='text-black'>Aviso Legal</Link>
                    <Link to="/politica-privacidad" id="privacidad" className='text-black'>Política de Privacidad</Link>
                    <Link to="/politica-cookies" id="cookies" className='text-black'>Política de Cookies</Link>
                 </div>
                 
              </div>
     
           </div>
    
         </footer>
       </>
    )
}


 // <footer>
        //     <div id="container1 fixede">
        //         <div id="links">
        //             <ul>
        //                 <li><Link to="/nuestro-club">Información</Link></li>
        //                 <li><Link to="/licencias">Links de Interés</Link></li>
        //                 <li><Link to="/contacto">Contacto</Link></li>
        //                 <li>Síguenos</li> 
        //             </ul>
        //         </div>

        //         <div id="social">
        //             <a title="facebook" href="https://www.facebook.com/people/Karate-Wadokan-Dos-Hermanas/100063655906913/" target="_blank"><img src={facebook} alt="facebook"/></a>
        //             <a title="youtube" href="" target="_blank"><img src={youtube} alt="youtube"/></a>
        //             <a title="instagram" href="https://www.instagram.com/karatewadokan/" target="_blank"><img src={instagram} lt="instagram"/></a>
        //             <a title="twitter" href="" target="_blank"><img src={twitter} alt="twitter"/></a>
        //         </div>
        //     </div>
        //     <div id="container2">
        //         <div id="copyright">
        //             <p>©Copyright <strong>Wadokan</strong>. Todos los derechos reservados</p>
        //         </div>

        //         <div id="legal">
        //             <Link to="/aviso-legal" id="politica">Aviso Legal</Link>
        //             <Link to="/politica-privacidad" id="privacidad">Política de Privacidad</Link>
        //             <Link to="/politica-cookies" id="cookies">Política de Cookies</Link>
        //         </div>
        //     </div>
        // </footer>


