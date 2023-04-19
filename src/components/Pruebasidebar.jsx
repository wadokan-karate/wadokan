import '../components/style/SidebarUser.css'
import "../index.css"


const Pruebasidebar = () => {

    return (

        <aside className="w-full p-6 sm:w-60 bg-blue-gray-600  text-blue-gray-50">
            <nav className="space-y-8 text-sm">
                <div className="space-y-2">
                    <h2 className=" text-xl font-semibold tracking-widest uppercase dark:text-gray-400">CATEGORIAS</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="/licencias/seguro">Seguro Medico</a>
                        <a rel="noopener noreferrer" href="#">Exámenes de Cinturón</a>
                        <a rel="noopener noreferrer" href="#">Licencias</a>
                        <a rel="noopener noreferrer" href="#">Inscripción al campeonato IMD</a>
                        <a rel="noopener noreferrer" href="#">Derechos de Imagen</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-widest uppercase dark:text-gray-400">HOME</h2>
                </div>
                
                
            </nav>
        </aside>
    )

}


export default Pruebasidebar;