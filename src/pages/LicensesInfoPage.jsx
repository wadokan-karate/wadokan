
import LicensesInfo from '../components/LicensesInfo.jsx';
import Pruebasidebar from '../components/Pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../style/DropdownLicenses.css";
import "../style/Licenses.css"

    const LicensesInfoPage  = () => {

        return (
            
            <>
                <DropdownLicenses></DropdownLicenses>   
                
                <div className="MainBackground">
                    <div className="flex"> 
                             
                    <Pruebasidebar></Pruebasidebar>
                    <LicensesInfo/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesInfoPage;