import { useState } from "react";
import '../components/style/SidebarUser.css'
import "../index.css"
import "../components/style/Pruebasidebar.css"


const Pruebasidebar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = (
    ) => {
        setIsDropdownOpen(!isDropdownOpen);
      };

    return (

     <>

        <div className="flex-col">
        
        <button onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">CATEGORIAS <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      {/* <!-- Dropdown menu --> */}
          <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="/licencias/seguro" className=" px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Seguro Medico</a>
      </li>
      <li>
        <a href="/licencias/examenescinturon" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Exámenes de Cinturón</a>
      </li>
      <li>
        <a href="/licencias/licensesinfo" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Licencias</a>
      </li>
      <li>
        <a href="/licencias/inscripcionImd" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Inscripción al campeonato IMD</a>
      </li>
      <li>
        <a href="/licencias/derechosdeimagen" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Derechos de Imagen</a>
      </li>
             </ul>
          </div>   
    
        </button>
     
            

        <aside className="asidep-6 h-full sm:w-60 bg-blue-gray-600 text-blue-gray-50">
            <nav className="space-y-8 text-sm">
                <div className="space-y-2">
                    <h2 className=" h2Style ml-6 mb-6 pt-9 text-2xl font-semibold tracking-widest uppercase">CATEGORIAS</h2>
                    <div className=" flex flex-col space-y-1 mr-10 p-3">
                        <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900 ' rel="noopener noreferrer" href="/licencias/seguro">Seguro Medico</a>
                        <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900' rel="noopener noreferrer" href="/licencias/examenescinturon">Exámenes de Cinturón</a>
                        <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900' rel="noopener noreferrer" href="/licencias/licensesinfo">Licencias</a>
                        <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900' rel="noopener noreferrer" href="/licencias/inscripcionImd">Inscripción al campeonato IMD</a>
                        <a className='categories text-lg  rounded-md hover:bg-wadokanBlue hover:text-blue-gray-900' rel="noopener noreferrer" href="/licencias/derechosdeimagen">Derechos de Imagen</a>
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