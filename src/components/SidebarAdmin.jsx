import { useState } from "react";
import '../components/style/SidebarUser.css'
import "../index.css"
import "../components/style/Pruebasidebar.css"


const Pruebasidebar = () => {    

    return (

     <>

        <div className="sidebar flex-col">
        
       
        <aside className="asidep-6 h-full sm:w-60 bg-blue-gray-600 text-blue-gray-50">
            <nav className="space-y-8 text-sm">
                <div className="space-y-2">
                    <h2 className=" h2Style ml-6 mb-6 pt-9 text-2xl font-semibold tracking-widest uppercase">CATEGORIAS</h2>
                    <div className=" flex flex-col space-y-1 mr-10 p-3">
                        <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900 ' rel="noopener noreferrer" href="/admin/noticias">NOTICIAS</a>
                        <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900' rel="noopener noreferrer" href="/admin/recursos">RECURSOS</a>
                        <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900' rel="noopener noreferrer" href="/admin/nuestroequipo">NUESTRO EQUIPO</a>
                        <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900' rel="noopener noreferrer" href="/admin/horario">HORARIO</a>
                        {/* <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900' rel="noopener noreferrer" href="/licencias/derechosdeimagen">Derechos de Imagen</a> */}
                    </div>
                </div>

                <div className=" bg-wadokanBlue text-blue-gray-900  mb-6 ml-4 m-10 p-3 rounded-md">
                    <a  className="text-lg ml-12 font-semibold hover:bg-wadokanBlue hover:text-blue-gray-900"href="/">INICIO</a>
                </div>               
                
            </nav>
        </aside>

        </div>

        <div>

            
    
    </div>  

    </>

    )

}


export default Pruebasidebar;

