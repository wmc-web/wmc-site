import '../styles/NavHeader.css';
import logo from '../res/img/wmc_logo_reverse.svg'
import { Container, Navbar, Nav, Button} from 'react-bootstrap';

function NavHeader() {
  return (
    <nav>
      <ul className='nav-container'>
        <li className="nav-item-left">
          <a href="/" className="nav-link">
            <img src={logo} className="main-logo" alt="WMC Business Services LLC" />
          </a>
        </li>
        <li className="nav-item-right"><a href="#contact-node" className="nav-link">Contact Us</a></li>
      </ul>
    </nav>

  );
}

export default NavHeader;