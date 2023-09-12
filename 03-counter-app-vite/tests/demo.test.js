
describe('Pruebas en < DemoComponent />', () =>{

        test('Esta prueba no debe de fallar', () =>{
            if (0 === 1){
                throw new Error('No puedo dividr por 0')
            }
            //inicializacion
            const message1 = 'hola Mundo'

            //estimulo
            const menssage2 = message1.trim()

            // observador el coportamineto.. esperado
            expect(message1).toBe( menssage2)
        })
    })
