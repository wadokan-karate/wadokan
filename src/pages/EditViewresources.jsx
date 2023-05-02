import SidebarAdmin from '../components/SidebarAdmin';
import EditResourcesTest from '../components/EditResourcesTest';
import '../style/editView.css'
import DropdownAdmin from '../components/DropdownAdmin.jsx';
import "../style/DropdownLicenses.css";

const EditViewResoruces = () => {

    return (
        
             <>

                <div className="absolute ml-60 mt-4 bg-wadokanBlue rounded-md font-semibold  hover:text-white hover:text-grey hover:text-white">
                  <DropdownAdmin></DropdownAdmin>  
                </div>
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <div className='editSchedule'><EditResourcesTest/></div>
                    </div>
                    
                </div>  
            </>
        
    );
};

export default EditViewResoruces;


 
            
        
