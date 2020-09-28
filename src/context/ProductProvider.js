import React from "react";
import recetas from "../components/data/product.js";

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
  //hooks ---------------------------------------------
  const [todasRecetas, setRecetas] = React.useState([]);
  const [filter, setFilter] = React.useState("all");
  const [preparacion, setPreparacion] = React.useState([]);

  //useEffect ---------------------------------------------
  React.useEffect(() => {
    setRecetas(recetas);
  }, []);

  React.useEffect(() => {
    setRecetas([]);

    const filtered = recetas.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));

    setRecetas(filtered);
  }, [filter]);
  const clickProduct = (product) => {
    let receta = {
      id: product.id,
      name: product.name,
      img: product.img,
      ingredients: product.ingredients,
      preparation: product.preparation,
      difficulty: product.difficulty,
      time: product.time,
      portions: product.portions,
      nutrititional: product.nutrititional,
    };

    setPreparacion([...preparacion, receta]);
  };

  return (
    <ProductContext.Provider
      value={{
        setFilter,
        filter,
        todasRecetas,
        clickProduct,
        preparacion,
        setPreparacion,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;