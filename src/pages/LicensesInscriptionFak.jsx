import InscriptionFak from '../components/InscriptionFak.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import "../style/Licenses.css"

    const LicensesInscriptionFak  = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                        <SidebarUser />
                        <InscriptionFak/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesInscriptionFak;