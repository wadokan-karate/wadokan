import { Link } from 'react-router-dom'
import '../components/style/SidebarUser.css'
import "../index.css"

const SidebarUser = () => {
    return (
        <div className="sidebar-user">
            <ul>

                <li className="categories">Categorías</li>
            
                <li>
                    <Link to="/">Seguro médico</Link>
                </li>
                <li>
                    <Link to="/">Exámenes de citurón</Link>
                </li>
                <li>
                    <Link to="/">Licencias</Link>
                </li>
                <li>
                    <Link to="/"> Inscripción Campeonato IMD</Link>
                </li>
                <li>
                    <Link to="/">Inscripciones FAK</Link>
                </li>
                <li>
                    <Link to="/">Derechos de Imagen</Link>
                </li>

            </ul>
        </div>

        )

    }

    export default SidebarUser
