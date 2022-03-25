import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
//COMPONENTE PADRE SE COMUNICA CON OTROS COMPONENTES Y SE ENCARGA DE RENDERIZAR
//==============================================================================

//CREANDO CATEGORIAS
const GifApp = () => {
  //categorias por defecto
  //const categoriesDefault = ["One Punch", "Samurai X", "Dragon Ball"];
  const categoriesDefault = ["One Punch"];
  const [categories, setCategories] = useState(categoriesDefault);

  /*
  const handleAdd = (e) => {
    // setCategories([...categories,'HunterXHunter']);
    setCategories((cats) => [...cats, "HunterXHunter"]);
  };*/

  return (
    <>
      <h1>GifApp</h1>
      {/* Al componente 'AddCategory' le paso la referencia de la funcion 'setCategories' */}
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
          { 
            //Al componente 'GifGrid' le pasamos la categoria para que lo procece
            categories.map(category => ( <GifGrid key={ category } category={ category } />))
          }
      </ol>
      
    </>
  );
};

GifApp.propTypes = {};

export default GifApp;
