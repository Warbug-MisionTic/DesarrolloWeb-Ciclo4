import React from "react";
import Col from 'react-bootstrap/Col'
import {useState} from 'react'
import  Button  from "react-bootstrap/Button";

export const ItemCount = ({initial, stock, onAdd}) => {

    const  [count, setCount] = useState(initial);

    const decrease = () =>{
        setCount(count -1)
    }

    const increase = () =>{
        setCount(count +1);
    }
  return (
    <Col className="col-3">
      <button disabled={count <= 1} onClick={decrease} className="a" >
        -
      </button>
      <h7> {count} </h7>
      <button  disabled={count >= stock} onClick={increase} className="a" >
        +
      </button>
      <Button disabled={stock<=0} onClick={() => onAdd(count)} className='btn-comprar' style={{ background: "#f39c12", color: "black"}}>Agregar al Carro</Button>
    </Col>
  );
};
export default ItemCount;