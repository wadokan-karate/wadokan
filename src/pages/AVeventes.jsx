import AVeventsCRUD from '../components/AVeventsCRUD.jsx';
import SidebarAdmin from '../components/SidebarAdmin.jsx';
import "../style/Licenses.css"

    const AVevents = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <AVeventsCRUD/>
                    </div>
                    
                </div>        
            </>
        
        )
    }
    
    export default AVevents

 
            
        
