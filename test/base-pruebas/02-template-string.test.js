import { getSaludo } from "../../src/base-pruebas/02-template-string";

// describe('pruebas en archivo 02 template string', () => { 
//     test('getSaludo Return Hola David', () => { 
//         const name = 'David';
//         const msj = getSaludo(name);
//         expect(msj).toBe(`Hola ${name}`);
//      })
// })

describe('sum module', () => {
    test('getSaludo Return Hola David', () => {
        const name = 'David';
        const msj = getSaludo(name);
      expect(msj).toBe(`Hola Mundo ${name}`);
    });
  });