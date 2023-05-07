// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ( { category } ) => {
    // const [counter, setCounter] = useState(10)
    // const [images, setImages] = useState([])

    // const getImages = async() =>{
    //     const newImages = await getGifs( category );
    //     setImages( newImages );

    // }
    // useEffect( ()=>{
    // //    getGifs( category );
    //     getImages()
    // }, [] 
    // )
    //CAMBIAMOS EL CODIGO ANTERIOR POR UN HOOK

    const { images, isLoading } = useFetchGifs( category );

    return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2 >Cargando...</h2> )
        }
        
        {/* <button onClick={ () => setCounter( counter + 1 )} >+ 1 { counter }</button> */}
        
        <div className='card-grid'>
            {
            images.map( ( images ) => (
                // <li key={ id }>{ title  }</li> 
                <GifItem 
                    key={ images.id } 
                    images={ images }
                    //esparcir propiedades
                    // { ...images }
                /> 
            ))
            }
        </div>
    </>
  )
}

