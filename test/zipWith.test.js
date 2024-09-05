import { expect } from 'chai';
import zipWith from '../js/zipWith.js';



const runTests = () => {
    describe('zipWith', () => {
        it('debería combinar dos arrays usando la función proporcionada', () => {
            const array1 = [1, 2, 3];
            const array2 = [4, 5, 6];
            const result = zipWith((a, b) => a + b, array1, array2);
            expect(result).to.deep.equal([5, 7, 9]);
        });

        it('debería manejar arrays de diferentes longitudes', () => {
            const array1 = [1, 2];
            const array2 = [4, 5, 6];
            const result = zipWith((a, b) => a + b, array1, array2);
            expect(result).to.deep.equal([5, 7]);
        });
    });
}


runTests();
