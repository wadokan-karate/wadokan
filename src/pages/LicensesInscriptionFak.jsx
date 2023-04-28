import InscriptionFak from '../components/InscriptionFak.jsx';
import Pruebasidebar from '../components/Pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../style/DropdownLicenses.css";
import "../style/Licenses.css"

    const LicensesInscriptionFak  = () => {

        return (
            
            <>  
                <DropdownLicenses></DropdownLicenses>   
                 
                <div className="container-licence">
                    <div className="flex"> 
                             
                      <Pruebasidebar></Pruebasidebar>
                      <InscriptionFak/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesInscriptionFak;