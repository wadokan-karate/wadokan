import ContactForm from "../components/ContactForm";
import ContactUsInfo from "../components/ContactUsInfo";

const Contact = () => {

    return (
        <>
        <div>
           <ContactUsInfo/>
        </div>
        <div className="FormContainer flex justify-center mb-20">
           <img className="FormImgBox" src="src\assets\ImgContactForm.png" alt="" />
           <ContactForm/>
        </div>
        </>
    );
};

export default Contact;