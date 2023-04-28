import EditEvent from '../components/Editevents';
import SidebarAdmin from '../components/SidebarAdmin';
import '../style/editView.css'

const EditViewEvent = () => {

    return (
        

                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <div className='editSchedule'><EditEvent/></div>
                    </div>
                    
                </div>  
            
        
    );
};

export default EditViewEvent;


 
            
        
