import { useState } from "react";
import '../components/style/SidebarUser.css'
import "../index.css"
import "../components/style/Pruebasidebar.css"


const Pruebasidebar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

    return (

     <>

        <div>

        <aside className="asidep-6 h-full sm:w-60 bg-blue-gray-600 text-blue-gray-50">
            <nav className="space-y-8 text-sm">
                <div className="space-y-2">
                    <h2 className=" ml-4 pt-9 text-xl font-semibold tracking-widest uppercase dark:text-gray-400">CATEGORIAS</h2>
                    <div className=" flex flex-col space-y-1">
                        <a className='categories' rel="noopener noreferrer" href="/licencias/seguro">Seguro Medico</a>
                        <a className='categories' rel="noopener noreferrer" href="/licencias/examenescinturon">Exámenes de Cinturón</a>
                        <a className='categories' rel="noopener noreferrer" href="/licencias/licensesinfo">Licencias</a>
                        <a className='categories' rel="noopener noreferrer" href="/licencias/inscripcionImd">Inscripción al campeonato IMD</a>
                        <a className='categories' rel="noopener noreferrer" href="/licencias/derechosdeimagen">Derechos de Imagen</a>
                    </div>
                </div>

                <div className=" ml-4 space-y-2">
                    <a href="/">
                      <h2 className="text-xl font-semibold tracking-widest uppercase dark:text-gray-400">HOME</h2>
                    </a>
                </div>               
                
            </nav>
        </aside>

        </div>

        <div>

            
<button onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">CATEGORIAS <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
  {/* <!-- Dropdown menu --> */}
<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="/licencias/seguro" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Seguro Medico</a>
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
 
    </div>  

    </>

    )

}


export default Pruebasidebar;