import './style/ourTeam.css'

const OurTeam = () => {

    return (
        <>
           <div className="OurTeam">
           <div className='senseiSection '> 
                <h1>LAS SENSEIS</h1>
                <div className='photoContainer mt-10'>
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
                <div className='teacherPhotoContainer mt-3 mb-4'>
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