import { usContext } from '../base-pruebas/06-deses-obj'


describe('Probando  -06- la funcion desetruct obj', () => { 

    test('Debe retornar un obj ', () => { 
        const clave = 'capitan'
        const nombre = 'Tony'
        const edad = 40
        const latlng = {
            lat: 14.1232,
            lng: -12.3232
        }
        const user = usContext({ clave, nombre, edad})
        expect(user).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                         lat: 14.1232,
                         lng: -12.3232
                    }
        })
     })
 })