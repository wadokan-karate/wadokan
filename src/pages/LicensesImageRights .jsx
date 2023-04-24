import ImageRights from '../components/ImageRights.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../components/style/DropdownLicenses.css";
import "../style/Licenses.css"

    const LicensesImageRights  = () => {

        return (
            
            <>  
                <DropdownLicenses></DropdownLicenses>   
                
                <div className="container-licence">
                    <div className="flex"> 
                              
                     <Pruebasidebar></Pruebasidebar>                   
                     <ImageRights/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesImageRights;