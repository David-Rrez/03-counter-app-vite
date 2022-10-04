import { getUser, usuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas 05 funciones', () => { 
    test('getUser debe de retornar un objeto', () => { 
        const testUser = {
            uid:'ABCD',
            username:'Userx'
        };
        const user=getUser();
        expect(user).toEqual(testUser);
        console.log(user);
    })

    test('getUsuarioActivo debe de retornar un objeto', () => { 
        
        const name='Davids';
        const testUserActive ={
            uid:'ABCDEF',
            username:name
        }
        const userActive = usuarioActivo(name);
        // expect(userActive.username).toBe(name);
        // expect(userActive).toEqual(testUserActive);
        expect(userActive).toStrictEqual({
            uid:'ABCDEF',
            username:name
        });
    })
 })