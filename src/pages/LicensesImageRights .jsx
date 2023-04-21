import ImageRights from '../components/ImageRights.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const LicensesImageRights  = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                     <Pruebasidebar></Pruebasidebar>                   
                     <ImageRights/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesImageRights;