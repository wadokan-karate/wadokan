import InscriptionImd from '../components/InscriptionImd.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const LicensesInscriptionImd  = () => {

        return (
            
            
                <div className="container-licence">
                    <div className="flex"> 
                        <Pruebasidebar></Pruebasidebar>
                        {/* <SidebarUser /> */}
                        <InscriptionImd/>
                    </div>   
                </div> 
                     
            
        
        )
    }
    
    export default LicensesInscriptionImd;