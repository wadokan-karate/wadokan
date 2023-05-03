import Editschedule from '../components/Editschedule';
import SidebarAdmin from '../components/SidebarAdmin';
import '../style/editView.css'

const EditViewSchedule = () => {

    return (
        
            <>  
                
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


 
            
        
