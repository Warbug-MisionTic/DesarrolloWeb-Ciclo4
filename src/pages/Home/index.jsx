import CardProduct from "../../components/CardProduct";
import Navbars from "../../layouts/Navbar";
import Banner from "../../components/Banner";

const Home = () => {
  return (
<<<<<<< HEAD
    <div >
      <h1 className='titulo-home'>Compra tu estilo</h1>
      <CardProduct
        precio="500"
        ubicar="Conjunto1.jpg"
        titulo="Conjunto para Hombre"
        descripcion="Camisa Velez, Pantalon Vo5"
      />
=======
    <div>
      
      <div className="banner">
        <Banner
          ubicar="bannertecno.jpg"
        />
      </div>
>>>>>>> 6598ba0d71dd6b86b6735d6ecade677da9880662

      <div className="cards">
        <CardProduct
          precio="500"
          ubicar="Asus14.jfif"
          titulo="Portatil Asus"
          descripcion='Equipo de 14" con procesador Intel Core I3 10TH'
        />

        <CardProduct
          precio="600"
          ubicar="Hp15.jfif"
          titulo="Portatil Hp"
          descripcion='Equipo de 15" con Intel Core I5 10TH'
        />

        <CardProduct
          precio="800"
          ubicar="Acer15.jfif"
          titulo="Portatil Gamer Acer"
          descripcion='Equipo de 15" con Intel Core I5 10TH'
        />
      </div>
    </div>
  );
};

export default Home;
