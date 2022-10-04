//console.log("Hola Mundo");
const persona = {
    nombre: 'Dave',
    apellido: 'Ramirez',
    edad: 25,
    direccion:{
        ciudadad:'Mexico',
        zip:4564646,
        lat:25465,
        lng:32132
    }
};

//console.table(persona);
const persona2 = {...persona};
persona2.nombre = 'peter';

console.log(persona)
console.log(persona2)
