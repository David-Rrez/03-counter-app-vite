import { retornaArreglo } from "../../src/base-pruebas/07-Deses-arr"

describe('Pruebas 07 arreglos', () => { 
    test('retornaArreglo debe de retornar un arreglo', () => { 
        const [letters,numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        // console.log(typeof letters);
        // console.log(typeof numbers);
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        

     })
 })