import InscriptionFak from '../components/InscriptionFak.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const LicensesInscriptionFak  = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                    <Pruebasidebar></Pruebasidebar>
                        {/* <SidebarUser /> */}
                        <InscriptionFak/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesInscriptionFak;