import HealthInsurance from '../components/HealthInsurance.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import '../components/style/HealthInsurance.css';
import "../style/Licenses.css"

    const LicensesView = () => {

        return (
            
            <> 
              <div className="MainBackground"> 
             
                <div className=' flex'>
                    
                       <Pruebasidebar></Pruebasidebar>
                        {/* <SidebarUser /> */} 
                       <HealthInsurance/>                
                </div>       
              </div>
            </>
        
        )
    }
    
    export default LicensesView;