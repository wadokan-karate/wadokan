
import LicensesInfo from '../components/LicensesInfo.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const LicensesInfoPage  = () => {

        return (
            
            <>
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