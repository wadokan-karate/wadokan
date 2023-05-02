import EditOurTeam from '../components/Editourteam';
import SidebarAdmin from '../components/SidebarAdmin';
import '../style/editView.css'
import DropdownAdmin from '../components/DropdownAdmin.jsx';
import "../style/DropdownLicenses.css";

const EditViewOurTeam = () => {

    return (
        
            <>

                <div className="absolute ml-60 mt-4 bg-wadokanBlue rounded-md font-semibold  hover:text-white hover:text-grey hover:text-white">
                  <DropdownAdmin></DropdownAdmin>  
                </div>
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <div className='editSchedule'><EditOurTeam/></div>
                    </div>
                    
                </div>  
            </>
        
    );
};

export default EditViewOurTeam;


 
            
        
