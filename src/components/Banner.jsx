

const Banner = ({ ubicar }) => {
  return (
    <div>

      <img className="banner" src={require(`../assets/img/${ubicar}`)}/>

    </div>
  );
};
export default Banner