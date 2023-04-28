import AddEvent from '../components/AddEvent';
import SidebarAdmin from '../components/SidebarAdmin';
import '../style/editView.css'

const AddViewEvent = () => {

    return (
        

                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <div className='editSchedule'><AddEvent/></div>
                    </div>
                    
                </div>  
            
        
    );
};

export default AddViewEvent;


 
            
        
