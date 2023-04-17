import './style/ourTeam.css'

const OurTeam = () => {

    return (
        <>
           <div className="OurTeam">
           <div className='senseiSection'> 
                <h1>LAS SENSEIS</h1>
                <div className='photoContainer'>
                    <div className='foto'>Foto</div>
                    <div className='foto'>Foto</div>
                </div>
           </div>

           <div className='teachersSection'>
            <h1>Nuestros Monitores</h1>
                <div className='teacherPhotoContainer'>
                    <div>
                    <div className='teachersPhoto'>Foto</div>
                    <div className='teachersPhoto'></div>
                    </div>
                    <div>
                        <div className='teachersPhoto'></div>
                    <div className='teachersPhoto'></div>
                    </div>
                    
                </div>
           </div>
            </div>
        </>
        );
    };

export default OurTeam;