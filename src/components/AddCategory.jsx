import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue,  setInputValue]  = useState()

    const onInputChange =( event ) =>{
        //setInputValue( 'Hola Mundo' )
        setInputValue( event.target.value )
        // console.log( event.target.value )
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        //setCategories( [ inputValue ] )
        if( inputValue.trim().length <= 0 ) return
        // setCategories( categories => [inputValue, ...categories ] )
        onNewCategory( inputValue.trim() )
        setInputValue( '' )
    }

    return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input
            type='text'
            placeholder='Buscar Gif'
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
        />
    </form>
  )
}
