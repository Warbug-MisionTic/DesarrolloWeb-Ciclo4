import React from "react";

export const Footer = ({ ubicar }) => {
  return (
    <div class="pie">
        <p className="copy">©Copyright Warbug - Web Developers / 2022</p>
        <a href="https://github.com/Warbug-MisionTic/DesarrolloWeb-Ciclo4/tree/development"><img src={require(`../assets/img/${ubicar}`)} alt="" class="git" /></a>
    </div>
  );
};

