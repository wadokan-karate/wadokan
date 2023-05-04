import SidebarAdmin from '../components/SidebarAdmin';
import EditResourcesTest from '../components/EditResourcesTest';
import '../style/editView.css'

const EditViewResoruces = () => {

    return (
        
             <>

    
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


 
            
        
