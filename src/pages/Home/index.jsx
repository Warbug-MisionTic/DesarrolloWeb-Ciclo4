import CardProduct from "../../components/CardProduct";
import Navbars from "../../layouts/Navbar";
import Banner from "../../components/Banner";
import products from '../../jsons/products.json'

const Home = () => {
  
  
  return (
    <div>
      <div className="banner">
        <Banner ubicar="bannertecno.jpg" />
      </div>

      <div className="cards">
    
        {
          products.map((product, index) => <CardProduct

          precio={product.precio}
          ubicar={product.ubicar}
          titulo={product.titulo}
          descripcion={product.descripcion}
          id={product.id}
          key = {index} 
          data={product}
        />)
            
        }
      </div>
    </div>
  );
};

export default Home;
