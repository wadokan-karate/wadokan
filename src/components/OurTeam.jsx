import '../style/ourTeam.css'
import Trainers from '../components/Trainers';

const OurTeam = () => {

    return (
        <>
           <div className="OurTeam">
           <div className='senseiSection'> 
                <h1>LAS SENSEIS</h1>
                <div className='photoContainer'>
                    <div className='foto1'></div>
                    <div className='foto2'></div>
                </div>
           </div>

           <div className='teachersSection'>
            <h1>Nuestros Monitores</h1>
                <div className='teacherPhotoContainer'>
                    {/* <div>
                    <div className='teachersPhoto'></div>
                    <div className='teachersPhoto'></div>
                    </div>
                    <div>
                        <div className='teachersPhoto'></div>
                    <div className='teachersPhoto'></div>
                    </div>
                     */}
                     <Trainers className='TrainerBox'/>
                </div>
           </div>
            </div>
        </>
        );
    };

export default OurTeam;