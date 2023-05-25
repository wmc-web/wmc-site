import '../styles/Footer.css';
import logo from '../res/img/wmc_logo_reverse.svg'


function Footer() {
  return (
    <footer>
        <img src={logo} className="foot-logo" alt="WMC Business Services LLC" />
        <h3>Privacy Policy</h3>
        <p className='p-policy-text'>
            This site does not track you or collect your personal data.
            Data may be requested by a representative as part of communication or the requested quoting process. 
            Such information would be voluntarily provided and would not be used for any part of this website. 
        </p>
        <p className='copyright'>{`© ${new Date().getFullYear()} WMC Business Services LLC`}</p>
    </footer>

  );
}

export default Footer;