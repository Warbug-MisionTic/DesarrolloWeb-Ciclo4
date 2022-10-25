import CardProduct from "../../components/CardProduct";
import Navbars from "../../layouts/Navbar";
import Banner from "../../components/Banner";


const Home = () => {
  return (
    <div>
      <div className="banner">
        <Banner ubicar="bannertecno.jpg" />
      </div>

      <div className="cards">
        <CardProduct
          precio="500"
          ubicar="Asus14.jfif"
          titulo="Portatil Asus"
          descripcion='Equipo de 14" con procesador Intel Core I3 10TH'
          id="1"
        />

        <CardProduct
          precio="600"
          ubicar="Hp15.jfif"
          titulo="Portatil Hp"
          descripcion='Equipo de 15" con Intel Core I5 10TH'
          id="2"
        />

        <CardProduct
          precio="800"
          ubicar="Acer15.jfif"
          titulo="Portatil Gamer Acer"
          descripcion='Equipo de 15" con Intel Core I5 10TH'
          id="3"
        />
      </div>
    </div>
  );
};

export default Home;
