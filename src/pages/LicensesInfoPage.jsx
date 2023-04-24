
import LicensesInfo from '../components/LicensesInfo.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../components/style/DropdownLicenses.css";
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