import { isNull, isTrue, } from '../true';
import { isFalse, isUndefined } from '../true';

describe('Probar resultados nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    });
});
describe('Probar resultados verdaderos', () => {
    test('verdadero', () => {
        expect(isTrue()).toBeTruthy();
    });
});
describe('Probar resultados falsos', () => {
    test('falso', () => {
        expect(isFalse()).toBeFalsy();
    });
});
describe('Probar resultados undefined', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});
describe('Probr resultados no verdaderos', () => {
    test('Falso o verdadero', () => {
        expect(isFalse()).not.toBeTruthy();
    })
})