import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './hiThere.css';

function ShapeExample() {
  return (
    <Container className='container1' style={{ marginTop: '7vh', }}>
      <Row>
        <Col xs={12} md={6} className='content'>
          <h1>Eaí, tudo certo? 👋</h1>
          <h4>AUTODIDATA Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, dicta aliquam. Placeat praesentium eum quod, nobis, cupiditate esse expedita, fugit cum culpa tenetur labore at quisquam deserunt fugiat ipsa similique?</h4>
          <p>Me siga nessas redes sociais  .  
            <a href="#home">gitHub</a>  .
            <a href="#home">Insta</a>  .
            <a href="#home">Linkedin</a>
          </p>
          <h6>Aqui vai um pdf do meu <a href="#home">Curriculo</a></h6>
        </Col>
        
        <Col xs={12} md={6}>
          <Image src="/assets/markes_sapucai_banner.png" rounded fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;