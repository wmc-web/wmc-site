import '../styles/TitleHeader.css';
import logo from '../res/img/wmc_logo_reverse.svg'
import {Button} from 'react-bootstrap';

function TitleHeader() {
  return (
    <div className='banner-div'>
      <div className="slogan-div">
        <h1>WMC Business Services</h1>
        <p>
        We are an insurance and financial consulting agency here to get you the coverage you need.
        With a fresh perspective on your current plans, we can help you maximize your benefits. 
        Give us a chance to show you what we can do.
        </p>

        <a href="#contact-node" className="px-9 py-4 mt-10 mb-1 text-lg font-semibold bg-red-800 text-white rounded-3xl hover:bg-red-900 no-underline btn-override">Contact Us</a>
      </div>
    </div>
  );
}

export default TitleHeader;