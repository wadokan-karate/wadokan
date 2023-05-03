import AVresourcesCRUD from '../components/AVresourcesCRUD.jsx';
import SidebarAdmin from '../components/SidebarAdmin.jsx';
import DropdownAdmin from '../components/DropdownAdmin.jsx';
import "../style/DropdownLicenses.css";
import "../style/Licenses.css"

    const AVresources = () => {

        return (
            
            <>
                
                <div className="absolute ml-60 mt-4 bg-wadokanBlue rounded-md font-semibold  hover:text-white hover:text-grey hover:text-white">
                  <DropdownAdmin></DropdownAdmin>  
                </div> 
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <AVresourcesCRUD/>
                    </div>
                    
                </div>        
            </>
        
        )
    }
    
    export default AVresources

 
            
        
