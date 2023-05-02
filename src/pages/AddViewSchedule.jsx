import AddSchedule from '../components/AddSchedule';
import SidebarAdmin from '../components/SidebarAdmin';
import DropdownAdmin from '../components/DropdownAdmin.jsx';
import "../style/DropdownLicenses.css";
import '../style/editView.css'

const AddViewSchedule= () => {

    return (
        
            <>

                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <div className='editSchedule'><AddSchedule/></div>
                    </div>
                    
                </div>  
            </>
        
    );
};

export default AddViewSchedule;


 
            
        
