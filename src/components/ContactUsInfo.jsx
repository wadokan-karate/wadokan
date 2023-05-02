import { lazy } from 'react';
import '../style/contactUsInfo.css'

const ContactUsInfo = () => {

    return (
        <div className="ContactUsInfoContainer">
            <div>
            <h1 className='HeaderContact pt-4 pb-3 text-center text-4xl'>¡Encuentranos!</h1></div>
            <div id='InfoMapContainer'>
                <div className='wadokanContactInfo '>
                    <h2 className='text-center font-semibold'>CONTACTA CON NOSOTRAS:</h2> <br /><br />
                    <h3 className='font-semibold'>Correo Electrónico: <br /> <br /> KarateWadokanSev@gmail.com</h3><br /><br />
                    <h2 className='font-semibold'>Teléfonos:</h2><br />
                    <h3 className='font-semibold'>- Verónica: +34644687024</h3><br />
                    <h3 className='font-semibold'>- Cristina: +34669226147</h3>
                    

                </div>

                <iframe className='MapContainer rounded-xl mt-4 mr-6' src="https://www.google.com/maps/d/embed?mid=15o8x2YDMwFmhxulJxYF6IbhoO7KGlq4&ehbc=2E312F" ></iframe>
               
                {/* <iframe  className=" rounded-lg mb-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.463484815922!2d-5.9274746999999985!3d37.33153449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126fc4de7bb9af%3A0x9e9be74ad56dec79!2sCentro%20Municipal%20Acu%C3%A1tico%20Deportivo!5e0!3m2!1ses!2ses!4v1681391589014!5m2!1ses!2ses" style={{width:600, height:450, border:0, allowfullscreen:"", loading:lazy, referrerpolicy:'no-referrer-when-downgrade'}}>

                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                </iframe>  */}
            </div>
        </div>
    );
};

export default ContactUsInfo;