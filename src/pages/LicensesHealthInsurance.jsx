import React from "react";
import HealthInsurance from '../components/HealthInsurance.jsx';
import Pruebasidebar from '../components/Pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../style/DropdownLicenses.css";
import '../style/HealthInsurance.css';
import "../style/Licenses.css";


    const LicensesView = () => {

        return (
            
            <> 

              <DropdownLicenses></DropdownLicenses>
              
              <div className="container-licence"> 
                
             
                <div className=' flex'>
                                                           
                       <Pruebasidebar></Pruebasidebar>
                       <HealthInsurance/>                
                </div>       
              </div>
            </>
        
        )
    }
    
    export default LicensesView;