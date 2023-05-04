import { lazy } from 'react';
import email from '../assets/img/email1.png'
import telefono from '../assets/img/llamada1.png'
import '../style/contactUsInfo.css'

const ContactUsInfo = () => {

    return (
        <div className="ContactUsInfoContainer">
            <div>
            <h1 className='HeaderContact pt-4 pb-3 text-center text-4xl'>¡Encuentranos!</h1></div>
            <div id='InfoMapContainer'>
                <div className='wadokanContactInfo '>
                    <h3 className='text-center font-semibold titleContact'>CONTACTA CON NOSOTRAS:</h3> <br />
                    <img className='iconsContact' id='emailIcon' src={email} alt='email'></img><br />
                    <h4 className='font-semibold text-center textContact'>KarateWadokanSev@gmail.com</h4><br /><br />
                    <img className='iconsContact' id='phoneIcon' src={telefono} alt='teléfonos'></img><br />
                    <h4 className='font-semibold text-center textContact'>Verónica: +34 644 687 024</h4>
                    <h4 className='font-semibold text-center textContact'>Cristina: +34 669 226 147</h4>
                    

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