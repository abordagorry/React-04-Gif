import { useState } from "react"
import { PropTypes } from "prop-types";

export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue,  setInputValue]  = useState('')

    const onInputChange =( { target } ) =>{
        //setInputValue( 'Hola Mundo' )
        setInputValue( target.value )
        // console.log( event.target.value )
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        //setCategories( [ inputValue ] )
        if( inputValue.trim().length <= 0 ) return
        // setCategories( categories => [inputValue, ...categories ] )
        setInputValue( '' )
        onNewCategory( inputValue.trim() )
    }

    return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input
            type="text"
            placeholder="Buscar Gif"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes ={
    onNewCategory: PropTypes.func.isRequired,
}

