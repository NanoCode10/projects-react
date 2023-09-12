//Desustructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks']
const [ , ,p3 ] = personajes
console.log(p3)

const retornoArreglo = () => {
    return ['ABC',123]
}

const [letra, numero] = retornoArreglo()

console.log(letra, numero)


//Tarea

const ustate = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}]
}

const [nombre, setnombre] = ustate('Goku')


console.log(nombre)
setnombre()

