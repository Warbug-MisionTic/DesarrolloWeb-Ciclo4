import React from "react";
import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
//SE UTILIZABA PARA LEER BASADO EN EL TUTORIAL (PERDI MI TIEMPO)
/* const producto = {
  producto1: {
    precio: "500",
    ubicar: "Asus14.jfif",
    titulo: "Portatil Asus",
    descripcion: "Equipo de 14' con procesador Intel Core I3 10TH",
    id: 1,
  },
  producto2: {
    precio: "600",
    ubicar: "Hp15.jfif",
    titulo: "Portatil Hp",
    descripcion: 'Equipo de 15" con Intel Core I5 10TH',
    id: "2",
  },
  producto3: {
    precio: "800",
    ubicar: "Acer15.jfif",
    titulo: "Portatil Gamer Acer",
    descripcion: 'Equipo de 15" con Intel Core I5 10TH',
    id: "3",
  },
}; */

const producto = {
  precio: "500",
  ubicar: "Asus14.jfif",
  titulo: "Portatil Asus",
  descripcion: "Equipo de 14' con procesador Intel Core I3 10TH",
  id: 1,
};
export const ItemReader = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(producto);
      }, 3000);
    });

    getData.then((res) => setData(res));
  }, []);

  return <CardProduct data={data} />;
};
