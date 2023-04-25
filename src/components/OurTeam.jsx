import './style/ourTeam.css'

const OurTeam = () => {

    return (
        <>
           <div className="OurTeam">
           <div className='senseiSection'> 
                <h1>LAS SENSEIS</h1>
                <div className='photoContainer'>
                    <div className='foto'>
                        <img src="src\assets\PruebaSensei.png" alt="" />
                    </div>
                    <div className='foto'>
                        <img src="src\assets\PruebaSensei1.png" alt="" />
                    </div>
                </div>
           </div>

           <div className='teachersSection'>
            <h1>Nuestros Monitores</h1>
                <div className='teacherPhotoContainer'>
                    <div>
                    <div className='teachersPhoto'>
                        <img src="src\assets\PruebaSensei.png" alt="" />
                    </div>
                    <div className='teachersPhoto'>
                        <img src="src\assets\PruebaSensei.png" alt="" />
                    </div>
                    </div>
                    <div>
                        <div className='teachersPhoto'>
                        <img src="src\assets\PruebaSensei.png" alt="" />
                        </div>
                    <div className='teachersPhoto'>
                    <img src="src\assets\PruebaSensei.png" alt="" />
                    </div>
                    </div>
                    
                </div>
           </div>
            </div>
        </>
        );
    };

export default OurTeam;