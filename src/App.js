import './App.css';
import NavHeader from './components/NavHeader.js'
import TitleHeader from './components/TitleHeader.js'
import ServiceNode from './components/ServiceNode.js'
import ContactNode from './components/ContactNode.js'
import Footer from './components/Footer.js'
import ServiceData from './data/ServiceData.js'
import { useState } from 'react';
import { Container, Offcanvas, Row, Card, Button, Col } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ServiceNodes = ServiceData.map(data => {
    return <ServiceNode 
      key={data.id} 
      img={data.img} 
      title={data.title} 
      description={data.description} 
      />
  })

  return (
    <Container fluid>
      <Row>
        <NavHeader />
        <TitleHeader />
        <div className='contrast-node'>
          <h1>Services</h1>
          <div className='service-flex'>
            {ServiceNodes}
          </div>
        </div>
        <ContactNode />
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
