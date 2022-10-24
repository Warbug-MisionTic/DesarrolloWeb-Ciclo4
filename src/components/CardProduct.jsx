import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProduct = ({ precio, ubicar, titulo, descripcion }) => {
  return (
    <div className='contenedor-padre'>

      <Card className='contenedor-card'>
        <Card.Img className='imagen-card' variant="top" src={require(`../assets/img/${ubicar}`)} />
        <Card.Body style={{ background: "#4224cc" }}>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>

          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", background: "#4224cc" }}>
            <p style={{ fontWeight: "600", color: "white", margin: "0" }}>Precio: ${precio}</p>
            <Button style={{ background: "#f39c12", color: "black"}}>Comprar</Button>
          </div>
        </Card.Body>
      </Card>

    </div>
  );
};
export default CardProduct