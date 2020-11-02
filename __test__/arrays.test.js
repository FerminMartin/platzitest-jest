import { arrayFruits, arrayColors } from '../arrays';

describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    })
    test('No con tiene un platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
 });