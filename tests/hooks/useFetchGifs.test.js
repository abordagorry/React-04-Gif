import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas hook useFetchGifs', () => { 

    test('Debe de regresar el estado inicial', () => { 
        
        const { result } = renderHook( () => useFetchGifs( 'One Punch') )
        const { images, isLoading } = result.current

        expect( images.length ).toBe( 0 )
        expect( isLoading ).toBeTruthy(  )

     })

     test('Debe de retornar arreglo de imagenes y el isLoding en false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs( 'One Punch') )
        //espera respuesta de carga, espero a que se cargue el listado de imagenes 
        await waitFor( 
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        )

        const { images, isLoading } = result.current

        expect( images.length ).toBeGreaterThan( 0 )
        expect( isLoading ).toBeFalsy(  )

     })    

 })
