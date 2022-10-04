//dedestructuracion/Asignacion desestructurante
const persona= {
    nombre:'Tony',
    edad:45,
    clave:'IronMan',
    rango:'Coronel'
};

// const {nombre:nombre2,edad,clave}=persona;
// console.log(nombre2);
// console.log(edad);
// console.log(clave)
const retornaPersona = (usuario) =>{ 
    const {edad,clave,nombre} = usuario;
    console.log(edad,clave,nombre);
}

const retornaPersona2 = ({nombre,clave,edad,rango = 'Capitan'}) =>{ 
    // console.log(clave,nombre,rango);
    return{
        nombreClave:clave,
        anios:edad
    }
}

const returnUseContext = ({nombre,clave,edad,rango = 'Capitan'}) =>{ 
    // console.log(clave,nombre,rango);
    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:456654,
            lng:13213
        }
    }
}

// retornaPersona2(persona);
// const avenger = retornaPersona2(persona);
// const avenger = returnUseContext(persona);
// console.log(avenger)
const {nombreClave,anios,latlng} = returnUseContext(persona);
console.log(nombreClave,anios)
console.log(latlng)
const {latlng:{lat,lng}} = returnUseContext(persona);
console.log(lat,lng);
const {lat:latitud,lng:longitud} = latlng;
console.log(latitud,longitud)