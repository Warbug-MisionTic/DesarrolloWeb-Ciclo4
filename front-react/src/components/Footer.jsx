import React from "react";

export const Footer = ({ ubicar }) => {
  return (
    <div className="pie">
      <p className="copy">©Copyright Warbug - Web Developers / 2022</p>
      <a href="https://github.com/Warbug-MisionTic/DesarrolloWeb-Ciclo4/tree/development"><img src={require(`../assets/img/${ubicar}`)} alt="" className="git" /></a>
    </div>
  );
};

