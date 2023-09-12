//Desestruturacion

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave: 'Ironman'
}
/*
const { nombre, edad, clave } = persona 

console.log(nombre);
console.log(edad);
console.log(clave);
*/
const uContext = ( {clave, nombre, edad, rango = 'capitan'} ) => {
    //console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.3232,
            lng: -12.3535
        }
    }
}

//const avenger = uContext( persona );

const {nombreClave, anios, latlng:{lat,lng}} = uContext(persona)
console.log(nombreClave, anios)
console.log(lat, lng)