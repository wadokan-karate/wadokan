import InscriptionImd from '../components/InscriptionImd.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const LicensesInscriptionImd  = () => {

        return (
            
            
                <div className="container-licence">
                    <div className="flex"> 
                        <Pruebasidebar></Pruebasidebar>
                        <InscriptionImd/>
                    </div>   
                </div> 
                     
            
        
        )
    }
    
    export default LicensesInscriptionImd;