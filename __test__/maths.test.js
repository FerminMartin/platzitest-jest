import { sumar, multiplicar, restar, dividir} from '../maths.js';

describe('Calculos matematicos', () =>{
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(3);
    });
    test('multiplicar', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
});