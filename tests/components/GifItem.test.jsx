import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas <GiftItem />', () => { 
    const title = 'Saitama'
    const url   = 'https://gmail.com/1.jpg'

    test('Debe hacer match con snapshot', () => { 
        const { container } = render( <GifItem title={ title } url={ url } /> )
        expect( container ).toMatchSnapshot();

     }) 

     test('Debe mostar la imagen con el url y el ALT indicado', () => { 
        render( <GifItem title={ title } url={ url } /> )
        //screen.debug() //MUSTRA EL SNAP CRADO
// console.log( screen.getByRole( 'img' ))
// console.log( screen.getByRole( 'img' ).pendingProps.src)

// console.log( screen.getByRole( 'img' ).alt)

        //Una forma de comparar 
        expect( screen.getByRole( 'img' ).src ).toBe( url )
        expect( screen.getByRole( 'img' ).alt ).toBe( title )
 
        //Forma con desetructuracion
        const { src, alt } = screen.getByRole( 'img' )
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
      })

      test('Debe mostrar el titulo en el componente', () => { 
        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title ) ).toBeTruthy

       })

 })