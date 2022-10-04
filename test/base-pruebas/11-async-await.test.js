import { getImagePromise } from "../../src/base-pruebas/11-async-await"

describe('Pruebas 11-async-await', () => { 
    test('getImagePromise debe de retornar una url', async() => { 
        const url = await getImagePromise();
        console.log(url);
        expect(typeof url).toBe('string');
     })
 })