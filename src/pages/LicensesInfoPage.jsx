
import LicensesInfo from '../components/LicensesInfo.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import "../style/Licenses.css"

    const LicensesInfoPage  = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                        <SidebarUser />
                        <LicensesInfo/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesInfoPage;