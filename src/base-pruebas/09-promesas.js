import getHeroes,{ getHeroes2,getHeroesByOwner } from "./08-imp-exp";

export const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve,reject) => {
    setTimeout( () => {
        const h1 = getHeroes2(id);
        if (h1 != undefined) {
            //console.log(h1);
            resolve(h1);
        }
        else{
            reject('No se pudo encontrar el héroe');
        }
    },1000);
});

}
// getHeroeByIdAsync(4)
// .then( console.log)
// // .catch( err=> console.log(err));
// .catch(console.warn)
