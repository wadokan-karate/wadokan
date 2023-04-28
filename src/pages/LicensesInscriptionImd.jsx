import InscriptionImd from '../components/InscriptionImd.jsx';
import "../style/InscriptionImd.css";
import Pruebasidebar from '../components/Pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../style/DropdownLicenses.css";
import "../style/Licenses.css"

    const LicensesInscriptionImd  = () => {

        return (
            <>
               <DropdownLicenses></DropdownLicenses>   
               
                <div className="container-licence">
                    <div className="flex"> 
                               
                        <Pruebasidebar></Pruebasidebar>
                        <InscriptionImd/>
                    </div>   
                </div> 
            </>        
            
        
        )
    }
    
    export default LicensesInscriptionImd;