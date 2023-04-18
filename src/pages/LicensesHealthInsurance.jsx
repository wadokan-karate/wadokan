import HealthInsurance from '../components/HealthInsurance.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import "../style/Licenses.css"

    const Licenses = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                        <SidebarUser />
                        <HealthInsurance/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default Licenses