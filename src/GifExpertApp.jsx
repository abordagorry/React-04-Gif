import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
//Archivo de BARRIL.
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState( ['One Punch'])
 
  const onAddCategory =( newCategory ) => {
    console.log( newCategory )
    // setCategories.push( 'Vamos q Vamos' )
    if ( categories.includes( newCategory ) ) return

    setCategories( [ newCategory, ...categories] )
    //Otra forma de agregar al hook
    // setCategories( cat => [ ...cat, 'Vamos nosotros'])
  }

  return (
    <>
        {/* TITULO */}
        <h1>GifExpertApp</h1>

        {/* INPUT */}
        <AddCategory  
            // setCategories={ setCategories } //Opcion 1 se pasa el hook por parametro.
            onNewCategory={ event => onAddCategory( event )}
        />

        {/* Listado GIF */}
        { categories.map( category => (
            <GifGrid 
                key={ category }
                category={ category }
            />
            )) 
        } 

    </>
  )
}
