
import AVourteamCRUD from '../components/AVourteamCRUD.jsx';
import SidebarAdmin from '../components/SidebarAdmin.jsx';
import "../style/Licenses.css"

    const AVourteam = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className='flex'>
                        <SidebarAdmin/>
                        <AVourteamCRUD/>
                    </div>
                    
                </div>        
            </>
        
        )
    }
    
    export default AVourteam

 
            
        
