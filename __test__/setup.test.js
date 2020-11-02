// después de cada prueba
afterEach(() => console.log('después de cada prueba'));
afterAll(() => console.log('después de todas la pruebas'));

//antes de cada prueba
beforeAll(() => console.log('Antes de todas las pruebas'));
beforeEach(() => console.log('antes de cada prueba'));

describe('preparar antes de ejecutar', () => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    });
});