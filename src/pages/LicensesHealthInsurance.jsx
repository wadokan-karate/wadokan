import React from "react";
import HealthInsurance from '../components/HealthInsurance.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import '../components/style/HealthInsurance.css';
import "../style/Licenses.css";


    const LicensesView = () => {

        return (
            
            <> 
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