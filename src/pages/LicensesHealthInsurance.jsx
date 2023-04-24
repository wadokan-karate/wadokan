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

              <DropdownLicenses></DropdownLicenses>
              
              <div className="MainBackground"> 
                
             
                <div className=' flex'>
                                                           
                       <Pruebasidebar></Pruebasidebar>
                       <HealthInsurance/>                
                </div>       
              </div>
            </>
        
        )
    }
    
    export default LicensesView;