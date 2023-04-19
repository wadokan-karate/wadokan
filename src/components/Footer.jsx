// import facebook from '../assets/img/facebook.png'
// import instagram from '../assets/img/instagram.png'
// import youtube from '../assets/img/youtube.png'
// import twitter from '../assets/img/twitter.png'
import { Link } from 'react-router-dom';
import "../style/Footer.css";
import "../index.css";
import React from "react";


export default function Footer(){
    return (
       <>   

       {/* <div id="MainContainer" className=" bg-wadokanBlue flex justify-center" >
        <div className=" h-full bg-wadokanBlue py-16 2xl:px-20 lg:px-20 px-4">
            <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
                <div className="flex flex-col flex-shrink-0 justify-center">
                    <div>
                        <img src="src\assets\LogoFooterRect.png" alt="" />                      
                       
                    </div>
                    <p className="text-sm leading-none text-gray-800 mt-4">Copyright © 2021 Luxe</p>
                    <p className="text-sm leading-none text-gray-800 mt-4">Cookies</p>
                    
                    <div className="flex items-center gap-x-4 mt-12 pl-40">
                        
                        <div className="opacity-50 w-10 h-10 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                               <a href="https://www.instagram.com/karatewadokan/" target="_blank">
                               <svg width="18" height="17" viewBox="0 0 18 17" fill="none">                             
                             <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M9.00081 0.233398C6.68327 0.233398 6.39243 0.243215 5.48219 0.283343C4.57374 0.323644 3.95364 0.462973 3.41106 0.667403C2.84981 0.87855 2.37372 1.161 1.8994 1.62066C1.42473 2.08016 1.13317 2.54137 0.914502 3.08491C0.702944 3.61071 0.558942 4.2116 0.518053 5.09132C0.477342 5.97311 0.466675 6.25504 0.466675 8.50015C0.466675 10.7453 0.476986 11.0262 0.518231 11.9079C0.560009 12.788 0.703833 13.3887 0.914679 13.9144C1.13282 14.4581 1.42437 14.9193 1.89887 15.3788C2.37301 15.8386 2.8491 16.1218 3.40999 16.3329C3.95293 16.5373 4.57321 16.6767 5.48148 16.717C6.39171 16.7571 6.68238 16.7669 8.99974 16.7669C11.3175 16.7669 11.6074 16.7571 12.5176 16.717C13.4261 16.6767 14.0469 16.5373 14.5898 16.3329C15.1509 16.1218 15.6263 15.8386 16.1004 15.3788C16.5751 14.9193 16.8667 14.4581 17.0853 13.9145C17.2951 13.3887 17.4391 12.7878 17.4818 11.9081C17.5227 11.0263 17.5333 10.7453 17.5333 8.50015C17.5333 6.25504 17.5227 5.97328 17.4818 5.09149C17.4391 4.21143 17.2951 3.61071 17.0853 3.08508C16.8667 2.54137 16.5751 2.08016 16.1004 1.62066C15.6258 1.16082 15.1511 0.878377 14.5893 0.667403C14.0453 0.462973 13.4249 0.323644 12.5164 0.283343C11.6062 0.243215 11.3164 0.233398 8.99814 0.233398H9.00081ZM8.23525 1.72311C8.46245 1.72277 8.71597 1.72311 9.00077 1.72311C11.2792 1.72311 11.5492 1.73104 12.449 1.77065C13.281 1.8075 13.7326 1.94218 14.0334 2.05533C14.4316 2.20517 14.7155 2.38428 15.014 2.67362C15.3127 2.96295 15.4976 3.23851 15.6526 3.62429C15.7694 3.91535 15.9086 4.3528 15.9464 5.15881C15.9873 6.03026 15.9962 6.29204 15.9962 8.49823C15.9962 10.7044 15.9873 10.9662 15.9464 11.8377C15.9084 12.6437 15.7694 13.0811 15.6526 13.3722C15.4979 13.758 15.3127 14.0327 15.014 14.3218C14.7153 14.6112 14.4318 14.7903 14.0334 14.9401C13.7329 15.0538 13.281 15.1881 12.449 15.225C11.5494 15.2646 11.2792 15.2732 9.00077 15.2732C6.72217 15.2732 6.45212 15.2646 5.55256 15.225C4.72055 15.1878 4.26899 15.0531 3.96801 14.9399C3.56978 14.7901 3.28533 14.611 2.98666 14.3216C2.68799 14.0323 2.5031 13.7574 2.34808 13.3715C2.23128 13.0804 2.09208 12.643 2.05421 11.837C2.01332 10.9655 2.00514 10.7037 2.00514 8.49617C2.00514 6.2886 2.01332 6.0282 2.05421 5.15674C2.09226 4.35073 2.23128 3.91329 2.34808 3.62188C2.50275 3.2361 2.68799 2.96054 2.98666 2.67121C3.28533 2.38187 3.56978 2.20276 3.96801 2.05258C4.26881 1.93891 4.72055 1.80457 5.55256 1.76755C6.33977 1.7331 6.64484 1.72277 8.23525 1.72105V1.72311ZM13.5558 3.09574C12.9905 3.09574 12.5318 3.53956 12.5318 4.08741C12.5318 4.63508 12.9905 5.07942 13.5558 5.07942C14.1212 5.07942 14.5799 4.63508 14.5799 4.08741C14.5799 3.53974 14.1212 3.09574 13.5558 3.09574ZM9.00082 4.25481C6.58071 4.25481 4.61855 6.15564 4.61855 8.50013C4.61855 10.8446 6.58071 12.7446 9.00082 12.7446C11.4209 12.7446 13.3824 10.8446 13.3824 8.50013C13.3824 6.15564 11.4209 4.25481 9.00082 4.25481ZM9.00079 5.74454C10.5717 5.74454 11.8453 6.97818 11.8453 8.50013C11.8453 10.0219 10.5717 11.2557 9.00079 11.2557C7.42975 11.2557 6.15632 10.0219 6.15632 8.50013C6.15632 6.97818 7.42975 5.74454 9.00079 5.74454Z"
                                 fill="white"
                             />
                         </svg>
                               </a>
                        </div>
                        <div className="opacity-50 w-10 h-10 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <a href="https://www.facebook.com/people/Karate-Wadokan-Dos-Hermanas/100063655906913/" target="_blank">
                               
                             <svg  xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                             </svg>
                            
                            </a>
                        </div>
                        
                        <div className="opacity-50 w-10 h-10 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                          <a href="https://www.youtube.com/@KarateWadokanSevilla/featured" target="_blank">
                            
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.6677 1.17143C16.4021 1.36664 16.9804 1.94183 17.1767 2.67227C17.5333 3.99611 17.5333 6.75832 17.5333 6.75832C17.5333 6.75832 17.5333 9.52043 17.1767 10.8444C16.9804 11.5748 16.4021 12.15 15.6677 12.3453C14.3369 12.7 9.00001 12.7 9.00001 12.7C9.00001 12.7 3.66309 12.7 2.33218 12.3453C1.59783 12.15 1.0195 11.5748 0.823232 10.8444C0.466675 9.52043 0.466675 6.75832 0.466675 6.75832C0.466675 6.75832 0.466675 3.99611 0.823232 2.67227C1.0195 1.94183 1.59783 1.36664 2.33218 1.17143C3.66309 0.81665 9.00001 0.81665 9.00001 0.81665C9.00001 0.81665 14.3369 0.81665 15.6677 1.17143ZM7.40002 4.43326V9.59993L11.6667 7.01669L7.40002 4.43326Z"
                                    fill="white"
                                />
                            </svg>
                          </a>  
                        </div>
                    </div>

                </div >

                <div className='Options flex items-center space-x-32'> 
                <div className=" Option1">
                    <h2 className="text-justify text-xl font-semibold leading-4 text-gray-800">Información</h2>
                    
                </div>
                <div className="Option2">
                    <h2 className="text-xl font-semibold leading-4 text-gray-800">Links de Interés</h2>
                
                </div>

                <div className="Option3">
                    <h2 className="text-xl font-semibold leading-4 text-gray-800">Contacto</h2>
                  
                    
                </div>
                
                </div>
                
            </div>
           
        </div>
      </div> */}

      
    <footer className=" bg-wadokanBlue">
      <div className="mx-auto w-full container">
        <div className="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3">
            
          <div className='Options'>
            
            <ul className="text-dark font-light">
              <li className="mb-4">
                <a href="/nuestro-club">
                <h2>INFORMACION</h2>
                </a>
                
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Purchase conditions</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Legal warning</a>
              </li>
            </ul>
          </div>

          <div className='Options'>
           
            <ul className="text-dark font-light">
                
              <li className="mb-4">
                <a href="/licencias">
                 <h2>LINKS DE INTERES</h2>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Purchase history</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Personal information</a>
              </li>
            </ul>
          </div>
          <div className='Options'>
         
            <ul className="text-dark text-xl font-light">
              <li className="mb-4">
                <a href="/contacto">
              <h2>CONTACTO</h2>
              </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Contact us</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Discounts & promotions</a>
              </li>
            </ul>
          </div>

        </div>

      </div>


      <div className="px-4 py-6 bg-orange items-center ">


        <div className="flex mb-6  space-x-6 sm:justify-center md:mt-0 mr-3">
          <a href="https://www.facebook.com/people/Karate-Wadokan-Dos-Hermanas/100063655906913/" target="_blank" className="text-dark hover:text-gray-900 dark:hover:text-white">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="https://www.instagram.com/karatewadokan/" target="_blank" className="text-dark hover:text-gray-900 dark:hover:text-white">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
            <span className="sr-only">Instagram page</span>
          </a>
          
          <a href="https://www.youtube.com/@KarateWadokanSevilla/featured" target='_blank' className="text-dark hover:text-gray-900 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg"class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
             <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
</svg>
          </a>
        </div>
        <span className="text-sm text-black sm:text-center ">© 2023 Karate Wadokan | All Rights Reserved.</span>
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


