//console.log("Hola Mundo");
// const saludar = function(nombre)
// {
//     return `Hola : ${nombre}`;
// }

// const saludar2 = (nombre) =>{
//     return `Hola : ${nombre}`;
// };

//en caso de regresar solo un return
// const saludar3 = (nombre) => `Hola : ${nombre}`;
// const saludar4 = () => 'Hola Mundo';

// console.log(saludar('Goku'));
// console.log(saludar2('Goku'));
// console.log(saludar3('Nacho'));
// console.log(saludar4());

export const getUser = () =>({
    uid:'ABCD',
    username:'Userx'
});

// const user = getUser();

// console.log(user);

// function getUsuarioActivo(nombre) {
//     return {
//         uid:'ABCDEF',
//         username:nombre
//     }
// };

export const usuarioActivo = (nombre) =>({
    uid:'ABCDEF',
    username:nombre
});

// const usuarioActivoImplicito = usuarioActivo('Samuel');
// console.log(usuarioActivoImplicito)






