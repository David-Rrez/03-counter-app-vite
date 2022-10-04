describe('Pruebas en <DemoComponent>', () => { 
    test('Esta prueba no debe de fallar', () => {
        //Inicializacion
        const msj1 = 'Hola Mundo';
        //Estimulo
        const msj2 = msj1.trim();
    
        //Comportamiento
        expect(msj1).toBe(msj2);
     })
})