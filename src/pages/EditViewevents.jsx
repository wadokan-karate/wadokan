import EditEvent from '../components/Editevents';
import SidebarAdmin from '../components/SidebarAdmin';
import '../style/editView.css'
import DropdownAdmin from '../components/DropdownAdmin.jsx';
import "../style/DropdownLicenses.css";

const EditViewEvent = () => {

    return (
        
              <>
                <div className="absolute ml-60 mt-4 bg-wadokanBlue rounded-md font-semibold  hover:text-white hover:text-grey hover:text-white">
                  <DropdownAdmin></DropdownAdmin>  
                </div>
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <div className='editSchedule'><EditEvent/></div>
                    </div>
                    
                </div>  
            
        </>
    );
};

export default EditViewEvent;


 
            
        
