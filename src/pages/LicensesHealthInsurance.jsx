import HealthInsurance from '../components/HealthInsurance.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const Licenses = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                    <Pruebasidebar></Pruebasidebar>
                        {/* <SidebarUser /> */}
                        <HealthInsurance/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default Licenses