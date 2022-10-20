import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProduct = ({ precio, ubicar, titulo, descripcion }) => {
  return (
    <div className='contenedor-padre'>

      <Card className='contenedor-card'>
        <Card.Img className='imagen-card' variant="top" src={require(`../assets/img/${ubicar}`)} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>

          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <p style={{ fontWeight: "600", color: "darkblue", margin: "0" }}>Precio: ${precio}</p>
            <Button variant="primary">Comprar</Button>
          </div>
        </Card.Body>
      </Card>

    </div>
  );
};
export default CardProduct