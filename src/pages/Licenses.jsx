import Pruebasidebar from '../components/pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../components/style/DropdownLicenses.css";
import "../style/Licenses.css"

    const Licenses = () => {

        return (
            
            <>
             <div className='flex'>  
                <DropdownLicenses></DropdownLicenses>             
                <Pruebasidebar/> 
                <img src="src\assets\img\SlideHome\LogoDojo.png" alt="" className='w-full'/>                 
                
             </div>
            </>
        
        )
    }
    
    export default Licenses;