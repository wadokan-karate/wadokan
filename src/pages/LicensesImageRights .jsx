import ImageRights from '../components/ImageRights.jsx';
import Pruebasidebar from '../components/Pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../style/DropdownLicenses.css";
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