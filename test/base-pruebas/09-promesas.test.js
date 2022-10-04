import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas 09-promesas', () => { 
    test('getHeroeByIdAsync debe de retornar un heroe', () => { 
        const id = 1;
        const hero = getHeroeByIdAsync(id)
                        .then( hero =>{

                            return expect(hero).toEqual({
                                id: 1,
                                name: 'Batman',
                                owner: 'DC'
                            });
                        });
        console.log(hero);
     })

     test('getHeroeByIdAsync debe de retornar un error si heroe no existe', () => { 
        const id = 10;
        getHeroeByIdAsync(id).catch( error => {
            return expect(error).toBe('No se pudo encontrar el héroe');
            });
     })

 })