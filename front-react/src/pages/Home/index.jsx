import { useContext, useEffect, useState } from 'react';
import CardProduct from "../../components/CardProduct";
import { Banner } from "../../components/Banner";
import { Intel } from "../../components/Banner";

import { fetchSinToken, fetchConToken } from '../../helpers/fetch';

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetchSinToken('productos', 'GET');
      const body = await resp.json();
      if (body.ok) {
        setProducts(body.productos)
      }
    }
    fetchProducts()
  }, [])
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
          products.map((product, index) => <CardProduct

            precio={product.precio}
            ubicar={product.ubicar}
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
