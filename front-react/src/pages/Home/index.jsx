import { useContext, useEffect, useState } from 'react';
import CardProduct from "../../components/CardProduct";
import { Banner } from "../../components/Banner";
import { Intel } from "../../components/Banner";
import { ShoppingContext } from "../../context/shoppingContext"

const Home = () => {
  const { productos } = useContext(ShoppingContext);

  return (
    <div>
      <div className="banner">
        <Banner ubicar="bannertecno.jpg" />
      </div>

      <div>
        <Intel ubicar1="nuevosportatiles.jpg" />
      </div>

      <div className="cards">
        {
          productos.map((product, index) =>
            <CardProduct
              precio={product.precio}
              ubicar={product.image}
              titulo={product.titulo}
              descripcion={product.descripcion}
              id={product.id}
              key={index}
              data={product}
            />)
        }
      </div>

    </div>
  );
};

export default Home;
