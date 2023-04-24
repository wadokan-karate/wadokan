import InscriptionImd from '../components/InscriptionImd.jsx';
import "../components/style/InscriptionImd.css";
import Pruebasidebar from '../components/pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../components/style/DropdownLicenses.css";
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