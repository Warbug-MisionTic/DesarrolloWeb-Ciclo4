import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CardAbout({ ubicar, titulo, descripcion, ubicar1, link }) {
  return (
    <div className='contenedor-padre'>

      <Card className='contenedor-about'>
        <Card.Img className='imagen-about' variant="top" src={require(`../assets/img/${ubicar}`)} />
        <Card.Body style={{ background: "#3c40c6", height: "11rem" }}>
          <Card.Title style={{ color: "white", fontSize: "1.1rem" }}>{titulo}</Card.Title>
          <Card.Text style={{ color: "#4bcffa", fontSize: "1rem" }}>{descripcion}</Card.Text>

          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", background: "#3c40c6" }}>
            <p style={{ fontWeight: "700", color: "#ffa801", margin: "0", fontSize: "1.2rem" }}>Github</p>
            <a href={link}><img className='imagen-about git' src={require(`../assets/img/${ubicar1}`)} alt="" /></a>
          </div>
        </Card.Body>
      </Card>

    </div>
  );
}
