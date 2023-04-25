import Pruebasidebar from '../components/pruebasidebar.jsx';
import DropdownLicenses from '../components/DropdownLicenses.jsx';
import "../components/style/DropdownLicenses.css";
import "../style/Licenses.css"

    const Licenses = () => {

        return (
            
            <>
               <div className="absolute ml-60 mt-4 bg-wadokanBlue rounded-md font-semibold hover:bg-gray-700 text-grey  hover:text-white hover:text-grey hover:text-white">
                <DropdownLicenses></DropdownLicenses>   
              </div>
             <div className='flex'>  
                        
                <Pruebasidebar/> 
                <img src="src\assets\img\SlideHome\LogoDojo.png" alt="" className='w-full'/>                 
                
             </div>
            </>
        
        )
    }
    
    export default Licenses;