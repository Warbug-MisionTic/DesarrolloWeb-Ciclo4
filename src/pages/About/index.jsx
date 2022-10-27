import { CardAbout } from "../../components/CardAbout";

const About = () => {
  return (
    <div>
      <h1 style={{ color: "white", fontFamily: "Oxygen", fontWeight: "400", background: "darkblue" }}>Equipo de Desarrollo Warbug</h1>

      <CardAbout
        ubicar="diego.jpeg"
        titulo="Diego Gaitán"
        descripcion='Desarrollador'
        ubicar1 = "github.png"
        link = "https://github.com/gaitandiego"
      />

      <CardAbout
        ubicar="sebas.jpg"
        titulo="Sebastian Gutiérrez"
        descripcion='Desarrollador'
        ubicar1 = "github.png"
        link = "https://github.com/sebastiangt06"
      />

      <CardAbout
        ubicar="glenda.jpeg"
        titulo="Glenda Trivino"
        descripcion='Scrum Master'
        ubicar1 = "github.png"
        link = "https://github.com/triviglenda"
      />

      <CardAbout
        ubicar="mauro.jpeg"
        titulo="Mauricio Alvarez"
        descripcion='Admin Base de Datos'
        ubicar1 = "github.png"
        link = "https://github.com/Malvarezhe"
      />

      <CardAbout
        ubicar="juanD.jpeg"
        titulo="Juan Diego J."
        descripcion='Análista'
        ubicar1 = "github.png"
        link = "https://github.com/juandijez"
      />

    </div>
  );
};

export default About;