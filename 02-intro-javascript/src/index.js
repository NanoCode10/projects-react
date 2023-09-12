import { getHeroeById } from "./bases/08-imp-exp";


/*
const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        //tarea importar el 8
        const p1 =  getHeroeById(2)
        resolve(p1)
       // reject('No se pudo encontrar el heroe' + p1)
    }, 2000);
})

promesa.then((heroe) => {
    console.log('heroe', heroe)
})
.catch( err => console.warn( err ))*/

const getHeroByIdAsync = (id) => {

    return  new Promise((resolve, reject) => {

        setTimeout(() => {
            //tarea importar el 8
            const p1 =  getHeroeById(id)
            if (p1) {
                resolve(p1)
            }else { 
                reject('No se pudo encontrar el heore')
            }
            
          
        }, 2000)
    })    

}

getHeroByIdAsync(1)
.then( heroe => console.log('Heroe', heroe))
.catch(console.warn)