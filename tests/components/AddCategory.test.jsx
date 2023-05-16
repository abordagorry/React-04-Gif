import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas <AddCategory />', () => { 
    
    test('debe de cambiar el valor de la caja de text0', () => { 
         render( <AddCategory onNewCategory={ () => {} } /> )
        // render( <AddCategory onNewCategory={ () => {} } /> )
        // const { container } = render( <AddCategory onNewCategory={ () => {} } /> )
        // expect( container ).toMatchSnapshot()
        //  screen.debug()

        const vatInput = screen.getByRole( 'textbox' )
         fireEvent.input( vatInput, { target:{ value: 'Saitama' } } )
        // fireEvent.input( input, { target:{ value: 'Saitama' } } )

        expect( vatInput.value ).toBe( 'Saitama' )
     })
 
     test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
         const inputValue     = 'Saitama'
         const onNewCategory  = jest.fn()

         render( <AddCategory onNewCategory={ onNewCategory }/> )

         const input = screen.getByRole( 'textbox' )
         const form  = screen.getByRole( 'form' )
      //   screen.debug()

         fireEvent.input( input, { target:{ value: inputValue } } ) //.input( input, { target:{ value: inputValue } } )
         // screen.debug()
         fireEvent.submit( form )
         //despues del submit se debe vaciar el input comparemos que este vacio
         expect( input.value ).toBe( '' )

         //Controlo que esta llamada al evento se este ejecuando.
         expect( onNewCategory ).toHaveBeenCalled()
         //Controlo que el evento se llame una sola vez
         expect( onNewCategory ).toHaveBeenCalledTimes( 1 )
         //Se contrla que se llame con el valor del input
         expect( onNewCategory ).toHaveBeenCalledWith( inputValue )

      })

      test('No debe llmar al onNewCategory si el input esta vacio', () => { 
         const onNewCategory  = jest.fn()
         render( <AddCategory onNewCategory={ onNewCategory }/> )
         
         const form  = screen.getByRole( 'form' )
         fireEvent.submit( form )

         expect( onNewCategory ).toHaveBeenCalledTimes( 0 )
         expect( onNewCategory ).not.toHaveBeenCalled( )
         
       })
 })