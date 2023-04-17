import { Link } from 'react-router-dom'
import '../components/style/SidebarUser.css'
import "../index.css"

const SidebarUser = () => {
    return (
        <div className="sidebar-user">
            <ul>

                <li className="categories">Categorias</li>
            
                <li>
                    <Link to="/">Seguro médico</Link>
                </li>
                <li>
                    <Link to="/">Exames de citurón</Link>
                </li>
                <li>
                    <Link to="/">Licencias</Link>
                </li>
                <li>
                    <Link to="/"> Incripción Campeonato IMD</Link>
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
