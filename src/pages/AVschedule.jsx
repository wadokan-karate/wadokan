import AVscheduleCRUD from '../components/AVscheduleCRUD.jsx';
import SidebarAdmin from '../components/SidebarAdmin.jsx';
import "../style/Licenses.css"

    const AVschedule = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <AVscheduleCRUD/>
                    </div>
                    
                </div>        
            </>
        
        )
    }
    
    export default AVschedule

 
            
        
