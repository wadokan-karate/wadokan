import SidebarUser from '../components/SidebarUser.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const Licenses = () => {

        return (
            
            <>
             <div className='flex'>               
                <Pruebasidebar/>     
                <img src="src\assets\img\SlideHome\LogoDojo.png" alt="" className='w-full'/>                 
                {/* <SidebarUser /> */}           
             </div>
            </>
        
        )
    }
    
    export default Licenses;