import EditOurTeam from '../components/Editourteam';
import SidebarAdmin from '../components/SidebarAdmin';
import '../style/editView.css'

const EditViewOurTeam = () => {

    return (
        
            <>

    
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


 
            
        
