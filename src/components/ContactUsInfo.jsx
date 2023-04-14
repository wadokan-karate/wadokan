import { lazy } from 'react';
import '../components/style/contactUsInfo.css'
const ContactUsInfo = () => {

    return (
        <div className="ContactUsInfoContainer">
            <h1>¡Encuentranos!</h1>
            <div id='InfoMapContainer'>
                <div className='wadokanContactInfo'>
                    <h3>Dirección</h3>
                    <h3>Email</h3>
                    <h3>Tlfn</h3>
                    <h3></h3>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.463484815922!2d-5.9274746999999985!3d37.33153449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126fc4de7bb9af%3A0x9e9be74ad56dec79!2sCentro%20Municipal%20Acu%C3%A1tico%20Deportivo!5e0!3m2!1ses!2ses!4v1681391589014!5m2!1ses!2ses" style={{width:600, height:450, border:0, allowfullscreen:"", loading:lazy, referrerpolicy:'no-referrer-when-downgrade'}}>

                {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}
                </iframe>
            </div>
        </div>
    );
};

export default ContactUsInfo;