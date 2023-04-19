import ImageRights from '../components/ImageRights.jsx';
import SidebarUser from '../components/SidebarUser.jsx';
import "../style/Licenses.css"

    const LicensesImageRights  = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                        <SidebarUser />
                        <ImageRights/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesImageRights;