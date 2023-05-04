import AVeventsCRUD from '../components/AVeventsCRUD.jsx';
import SidebarAdmin from '../components/SidebarAdmin.jsx';
import DropdownAdmin from '../components/DropdownAdmin.jsx';
import "../style/DropdownLicenses.css";
import "../style/Licenses.css"

    const AVevents = () => {

        return (
            
            <>
                

                <div className="absolute ml-60 mt-4 bg-wadokanBlue rounded-md font-semibold  hover:text-white hover:text-grey hover:text-white">
                  <DropdownAdmin></DropdownAdmin>  
                </div> 
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <AVeventsCRUD/>
                    </div>
                    
                </div>        
            </>
        
        )
    }
    
    export default AVevents

 
            
        
