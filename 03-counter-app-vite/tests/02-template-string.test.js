
import { getSaludo } from '../base-pruebas/02-template-string'

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe de retornar "Hola Mariano"', () =>{
        const name = 'Mariano'
        const menssage = getSaludo( name )

        expect( menssage ).toBe(`Hola ${ name }`)
    })
})



