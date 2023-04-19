import BeltExams from '../components/BeltExams.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const LicensesBeltExam = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                        <Pruebasidebar></Pruebasidebar>
                        {/* <SidebarUser /> */}
                        <BeltExams/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesBeltExam