

export const Banner = ({ ubicar }) => {
  return (
    <div>

      <img className="banner" src={require(`../assets/img/${ubicar}`)}/>
      
    </div>
  );
};

export const Intel = ({ ubicar1 }) => {
  return (
    <div>

      <img className="banner" src={require(`../assets/img/${ubicar1}`)}/>
      
    </div>
  );
};
