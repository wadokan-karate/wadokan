import { Link } from 'react-router-dom'
import '../components/style/SidebarUser.css'
import "../index.css"

const SidebarUser = () => {
    return (
        <div className="sidebar-user">
            
            <ul>

                <li className="categories">Categorías</li>
            
                <li>
                    <Link to="/licencias/seguro">Seguro médico</Link>
                </li>
                <li>
                    <Link to="/licencias/examenescinturon">Exámenes de citurón</Link>
                </li>
                <li>
                    <Link to="/licencias/licensesinfo">Licencias</Link>
                </li>
                <li>
                    <Link to="/licencias/inscripcionImd"> Inscripción Campeonato IMD</Link>
                </li>
                <li>
                    <Link to="/licencias/inscripcionfak">Inscripciones FAK</Link>
                </li>
                <li>
                    <Link to="/licencias/derechosdeimagen">Derechos de Imagen</Link>
                </li>

            </ul>
        </div>

        )

    }

    export default SidebarUser
