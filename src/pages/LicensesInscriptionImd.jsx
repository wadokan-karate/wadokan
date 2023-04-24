import InscriptionImd from '../components/InscriptionImd.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../components/style/DropdownLicenses.css";
import "../style/Licenses.css"

    const LicensesInscriptionImd  = () => {

        return (
            
            
                <div className="container-licence">
                    <div className="flex"> 
                        <DropdownLicenses></DropdownLicenses>             
                        <Pruebasidebar></Pruebasidebar>
                        <InscriptionImd/>
                    </div>   
                </div> 
                     
            
        
        )
    }
    
    export default LicensesInscriptionImd;