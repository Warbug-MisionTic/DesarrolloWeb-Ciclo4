import Button from 'react-bootstrap/Button';
import context from 'react-bootstrap/esm/AccordionContext';
import Card from 'react-bootstrap/Card';
import { Home } from '../Pantallas/Home/Home';

export const Productos = ({precio, ubicar, titulo, descripcion}) => {
    return (
      <div className='contenedor-padre'>

        <Card className='contenedor-card'>
          <Card.Img className='imagen-card' variant="top" src={ubicar} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
  
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center"}}>
              <p style={{ fontWeight: "600" ,color: "darkblue",margin: "0"}}>Precio: ${precio}</p>
              <Button variant="primary">Comprar</Button>
            </div>
          </Card.Body>
        </Card>
  
      </div>
    );
  };