import HealthInsurance from '../components/HealthInsurance.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import '../components/style/HealthInsurance.css';
import "../style/Licenses.css"

    const Licenses = () => {

        return (
            
            <> 
              <div className="container-health float-left ">
                <div className='flex justify-center'>
                    
                       <Pruebasidebar></Pruebasidebar>
                        {/* <SidebarUser /> */} 
                       <HealthInsurance/>                
                </div>       
              </div>
            </>
        
        )
    }
    
    export default Licenses;