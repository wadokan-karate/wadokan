import React from "react";
import HealthInsurance from '../components/HealthInsurance.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../components/style/DropdownLicenses.css";
import '../components/style/HealthInsurance.css';
import "../style/Licenses.css";


    const LicensesView = () => {

        return (
            
            <> 
              <div className="MainBackground"> 
                
             
                <div className=' flex'>
                       <DropdownLicenses></DropdownLicenses>                                    
                       <Pruebasidebar></Pruebasidebar>
                       <HealthInsurance/>                
                </div>       
              </div>
            </>
        
        )
    }
    
    export default LicensesView;