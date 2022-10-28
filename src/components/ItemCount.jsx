import React from "react";
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import Button from "react-bootstrap/Button";


export const ItemCount = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1)
  }

  const increase = () => {
    setCount(count + 1);
  }
  return (
    <Col className="col-5">
      <div className="d-flex count-flex">
      <button disabled={count <= 1} onClick={decrease} className="d-flex counter">-</button>
      <span className="d-flex spancounter">{count}</span>
      <button  disabled={count >= stock} onClick={increase} className="d-flex counter">+</button>
      <Button disabled={stock <= 0} onClick={() =>onAdd(count)
      } className='btn-comprar' style={{ background: "#f39c12", color: "black" }}>Agregar</Button>
      </div>
      
      
    </Col>
  );
};
export default ItemCount; 