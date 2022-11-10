import { useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount';
import { ShoppingContext } from '../context/shoppingContext';
import Button from 'react-bootstrap/Button'

const CardProduct = ({ precio, ubicar, titulo, descripcion, data, id, count }) => {
  const [goToCart, setGoToCart] = useState(false)
  const { productos, addProduct } = useContext(ShoppingContext);
  const [precioCount, setPrecioCount] = useState(precio);


  const onAdd = (quantity) => {
    const productData = { ...data, quantity, precio: precioCount }
    setGoToCart(true);
    addProduct(productData);

  }
  const productFinder = productos.findIndex(item => item.id === id)
  
  const onChangePrecioCount = (price) =>{
    setPrecioCount(price)
  }

  return (
    <div className='contenedor-padre'>
      <Card className='contenedor-card'>
        <Card.Img className='imagen-card' variant="top" src={ubicar} />
        <Card.Body style={{ background: "#4224cc", color: 'white' }}>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", background: "#4224cc" }}>
            <p style={{ fontWeight: "600", color: "#ffa801", margin: "0" }}>Precio: ${precioCount}</p>
            {
              goToCart
                ? <Link to='/cart'><Button className='btn-comprar2' style={{ background: "#f39c12", color: "black" }}>Terminar compra</Button></Link>
                : <ItemCount initial={1} stock={productos[productFinder].stock} onAdd={onAdd} onChangePrecioCount={onChangePrecioCount} precio={precio} />
            }
          </div>
        </Card.Body>
      </Card>

    </div>
  );
};
export default CardProduct
