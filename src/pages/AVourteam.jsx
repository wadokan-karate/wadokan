
import AVourteamCRUD from '../components/AVourteamCRUD.jsx';
import SidebarAdmin from '../components/SidebarAdmin.jsx';
import DropdownAdmin from '../components/DropdownAdmin.jsx';
import "../style/DropdownLicenses.css";
import "../style/Licenses.css"

    const AVourteam = () => {

        return (
            
            <>
                <div className="absolute ml-60 mt-4 bg-wadokanBlue rounded-md font-semibold  hover:text-white hover:text-grey hover:text-white">
                  <DropdownAdmin></DropdownAdmin>  
                </div> 
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <AVourteamCRUD/>
                    </div>
                    
                </div>        
            </>
        
        )
    }
    
    export default AVourteam

 
            
        
