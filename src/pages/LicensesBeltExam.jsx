import BeltExams from '../components/BeltExams.jsx';
import Pruebasidebar from '../components/pruebasidebar.jsx';
import "../style/Licenses.css"

    const LicensesBeltExam = () => {

        return (
            
            <>
                <div className="MainBackground">
                    <div className="flex"> 
                        <Pruebasidebar></Pruebasidebar>
                        <BeltExams/>
                    </div>   
                </div> 
                     
            </>
        
        )
    }
    
    export default LicensesBeltExam