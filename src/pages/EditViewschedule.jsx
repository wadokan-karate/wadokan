import Editschedule from '../components/Editschedule';
import SidebarAdmin from '../components/SidebarAdmin';
import DropdownAdmin from '../components/DropdownAdmin.jsx';
import "../style/DropdownLicenses.css";
import '../style/editView.css'

const EditViewSchedule = () => {

    return (
        
            <>  

                <div className="absolute ml-60 mt-4 bg-wadokanBlue rounded-md font-semibold  hover:text-white hover:text-grey hover:text-white">
                  <DropdownAdmin></DropdownAdmin>  
                </div>
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <div className='editSchedule'><Editschedule/></div>
                    </div>
                    
                </div>  
            
            </>
    );
};

export default EditViewSchedule;


 
            
        
