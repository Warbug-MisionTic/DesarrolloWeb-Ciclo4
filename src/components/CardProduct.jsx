import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount';
import { ShoppingContext } from '../context/shoppingContext';

const CardProduct = ({ precio, ubicar, titulo, descripcion, data }) => {
  const [goToCart, setGoToCart] = useState(false)
  const { dataShopping , addProduct} = useContext(ShoppingContext);

  console.log(dataShopping)
  
  const onAdd = (quantity) => {
    const productData = {...data, quantity}
    setGoToCart(true);
    addProduct(productData);  
  }

  return (
    <div className='contenedor-padre'>
      <Card className='contenedor-card'>
        <Card.Img className='imagen-card' variant="top" src={require(`../assets/img/${ubicar}`)} />
        <Card.Body style={{ background: "#4224cc", color: 'white' }}>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>

          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", background: "#4224cc" }}>
            <p style={{ fontWeight: "600", color: "#ffa801", margin: "0" }}>Precio: ${precio}</p>
            {
              goToCart
                ? <Link to='/cart'>Terminar compra</Link>
                : <ItemCount initial={1} stock={7} onAdd={onAdd}/>
            }
          </div>
        </Card.Body>
      </Card>

    </div>
  );
};
export default CardProduct
 