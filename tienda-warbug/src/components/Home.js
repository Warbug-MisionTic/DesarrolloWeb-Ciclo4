import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import context from 'react-bootstrap/esm/AccordionContext';

export const Home = () => {
  return (
    <div >
      <h1 className='titulo-home'>Nuestros Productos</h1>
        <Productos 
        precio = "500"
        ubicar = "../img/Conjunto1.jpg"
        titulo = "Conjunto para Hombre"
        descripcion = "Camisa Velez, Pantalon Vo5"
        />

        <Productos 
        precio = "600"
        ubicar = "../img/Mujer1.jpg"
        titulo = "Conjunto para dama"
        descripcion = "Blusa Zara con Pantalón Sache"
        />

        <Productos 
        precio = "800"
        ubicar = "../img/niña2.jpg"
        titulo = "Conjunto para niña"
        descripcion = "Vestido de hojas loret"
        />

        <Productos 
        precio = "800"
        ubicar = "../img/niña1.jpg"
        titulo = "Vestido princesa sofia"
        descripcion = "Vestido enterizo para niña"
        />
    </div>
  );
};

/* export default Home; */

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
  

