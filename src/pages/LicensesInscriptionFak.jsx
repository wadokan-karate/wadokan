import InscriptionFak from '../components/InscriptionFak.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const LicensesInscriptionFak  = () => {

        return (
            
            <>
                <div className="container-licence">
                    <div className="flex"> 
                      <Pruebasidebar></Pruebasidebar>
                      <InscriptionFak/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesInscriptionFak;