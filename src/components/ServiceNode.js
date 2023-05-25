import '../styles/ServiceNode.css';

function ServiceNode(props) {
  return (
    <div className='service-item'>
        <img src={`img/${props.img}`} alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  );
}

export default ServiceNode;