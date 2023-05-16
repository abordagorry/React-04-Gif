import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock( '../../src/hooks/useFetchGifs' )

describe('Pruebas <GifGrid />', () => { 
    const category = 'One Punch'
    
    test('Debe mostrar el loading inicial', () => { 
        
        useFetchGifs.mockReturnValue( {
            images:[],
            isLoading: true 
        } )

        render( <GifGrid category={ category } /> )
        // screen.debug()
        expect( screen.getByText( 'Cargando...') )
        expect( screen.getByText( category) )

     })   
     
     test('Debe de mostrar item cuando se cargan las imagenes useFetchGrifs ', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'ddd',
                url: 'http://imagenes.com/1.jpg'
            },
            {
                id: 'ABC1',
                title: 'ddd1',
                url: 'http://imagenes.com/2.jpg'
            }
        ]

        useFetchGifs.mockReturnValue( {
            images:gifs,
            isLoading: true 
        } )
 
        render( <GifGrid category={ category } /> )
        expect( screen.getAllByRole( 'img' ).length  ).toBe( 2 )

      })

 })