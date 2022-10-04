import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp'
describe('Pruebas en 08 import export', () => { 
    test('getHeroeById retorna heroe por ID', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        // console.log(heroe);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
     });
     test('getHeroeById retorna heroe undefined', () => { 
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();
     });
     test('getHeroesByOwner retorna heroe por owner', () => { 
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        console.log(heroe)
        expect(heroe.length).toBe(3);
        expect(heroe).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }]);
        const ownerM = 'Marvel';
        const heroeM = getHeroesByOwner(ownerM);
        console.log(heroeM)
        expect(heroeM.length).toBe(2);
        expect(heroeM).toEqual([{
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        }]);

        // expect(heroe);
     });
 })