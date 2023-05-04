import BeltExams from '../components/BeltExams.jsx';
import Pruebasidebar from '../components/Pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../style/DropdownLicenses.css";
import "../style/Licenses.css"

    const LicensesBeltExam = () => {

        return (
            
            <>  
                <DropdownLicenses></DropdownLicenses>
                <div className="MainBackground"> 
                
                    <div className="flex"> 
                        
                        <Pruebasidebar></Pruebasidebar>
                        <BeltExams/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesBeltExam