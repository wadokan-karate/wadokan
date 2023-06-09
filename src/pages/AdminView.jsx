import SidebarAdmin from '../components/SidebarAdmin.jsx';
import DropdownAdmin from '../components/DropdownAdmin.jsx';
import "../style/DropdownLicenses.css";
import "../style/Licenses.css"

    const AdminView = () => {

        return (
            
            <>
                <div className="absolute ml-60 mt-4 bg-wadokanBlue rounded-md font-semibold  hover:text-white hover:text-grey hover:text-white">
                  <DropdownAdmin></DropdownAdmin>  
                </div> 
                <div className="flex container-info">
                  <SidebarAdmin></SidebarAdmin>
                  <img src="src\assets\img\SlideHome\LogoDojo.png" alt="" className='w-full'/>    
                </div>        
            </>
        
        )
    }
    
    export default AdminView