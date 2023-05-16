import { getGifs } from "../../src/helpers/getGifs"


describe('Pruebas getGifts()', () => { 
    test('Debe retonar un arreglo de gifts', async() => { 
        const gifs = await getGifs( 'One Punch')
        //Chequeo que tenga mas de un elemento.
        expect( gifs.length ).toBeGreaterThan( 0 )

        //Controlo formato del objeto.
        expect( gifs[0] ).toEqual( { 
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
            
        }) 

     })



 })