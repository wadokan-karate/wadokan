import AVresourcesCRUD from '../components/AVresourcesCRUD.jsx';
import SidebarAdmin from '../components/SidebarAdmin.jsx';
import "../style/Licenses.css"

    const AVresources = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <AVresourcesCRUD/>
                    </div>
                    
                </div>        
            </>
        
        )
    }
    
    export default AVresources

 
            
        
