import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp"

describe('pruebas en 08-imp-exp', () => { 
    test('getHeroById debe de retornar un heroe por ID', () => { 
        const id = 1
        const hero = getHeroeById(id)
        expect( hero).toEqual({ id: 1, name:'Batman', owner:'DC'})
    })

    test('getHeroById debe de retornar undefined si no existe', () => { 
        const id = 100
        const hero = getHeroeById(id)
        expect( hero ).toBeFalsy()
    })
    test('getHeroesByOwner debe regresar heores de DC', () => { 
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        expect( heroes.length ).toBe( 3 )
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner))
    })
    test('getHeroesByOwner debe regresar heores de Marvel', () => { 
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect( heroes.length ).toBe( 2 )
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner))
    })
 })