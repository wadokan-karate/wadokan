import InscriptionFak from '../components/InscriptionFak.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../components/style/DropdownLicenses.css";
import "../style/Licenses.css"

    const LicensesInscriptionFak  = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                      <DropdownLicenses></DropdownLicenses>             
                      <Pruebasidebar></Pruebasidebar>
                      <InscriptionFak/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesInscriptionFak;