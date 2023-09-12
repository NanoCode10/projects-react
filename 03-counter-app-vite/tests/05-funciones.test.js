import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones"

describe('Prueba en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }

    const user = getUser()
    
    expect( testUser ).toEqual( user )
    })

    test('GetUsuarioActivo debe de retornar un objeto', () => { 
       const name = 'Mariano'
       const user = getUsuarioActivo( name )
       expect( user ).toStrictEqual({
        uid: 'ABC567',
        username: name
       })
     })
 })