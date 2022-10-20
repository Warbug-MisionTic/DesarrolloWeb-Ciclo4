import CardProduct from "../../components/CardProduct";

const Home = () => {
  return (
    <div >
      <h1 className='titulo-home'>Nuestros Productos</h1>
      <CardProduct
        precio="500"
        ubicar="Conjunto1.jpg"
        titulo="Conjunto para Hombre"
        descripcion="Camisa Velez, Pantalon Vo5"
      />

      <CardProduct
        precio="600"
        ubicar="Saco1.jpg"
        titulo="Conjunto para Hombre"
        descripcion="Chaqueta y con Pantalón Sache"
      />

      <CardProduct
        precio="800"
        ubicar="niña1.jpg"
        titulo="Conjunto para niña"
        descripcion="Vestido de hojas loret"
      />
    </div>
  );
};

export default Home;