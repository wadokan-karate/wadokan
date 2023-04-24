import { Link } from 'react-router-dom'
import '../components/style/SidebarUser.css'
import "../index.css"

const SidebarAdmin = () => {
    return (
        <div className="sidebar-user">
            <ul>

                <li className="categories">Categorías</li>
            
                <li>
                    <Link to="/admin/noticias">Noticias</Link>
                </li>
                <li>
                    <Link to="/admin/recursos">Recursos</Link>
                </li>
                <li>
                    <Link to="/admin/nuestroequipo">Nuestro equipo</Link>
                </li>
                <li>
                    <Link to="/admin/horario">Horarios</Link>
                </li>

            </ul>
        </div>

        )

    }

    export default SidebarAdmin
