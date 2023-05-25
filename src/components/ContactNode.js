import '../styles/ContactNode.css';

const phone = "+13603397801"
const phoneFormat = "(360) 339-7801" 
const email = "quote@wmcbusinessservices.com" 

function ContactNode() {
  return (
    <section className='contact-node' id='contact-node'>
        <h1>Ready to Get Started?</h1>
        <p className='contact-text'>As an agency, we like to think outside of the box. See how WMC Business Services can get you the coverage you need. If you're ready to get started, we're ready to help!</p>
        <p><strong>Contact us by email</strong>: <a href={`mailto:${email}`} className='red-link'>{email}</a></p>
        <p><strong>Contact us by phone</strong>: <a href={`tel:${phone}`} className='red-link'>{phoneFormat}</a></p>
    </section>

  );
}

export default ContactNode;