import { expect } from 'chai';
import { divisible3Numbers} from '../js/divisible3Numbers.js';

describe("Fixed Tests", function() {
    it("Basic Test Cases", function() {
        expect(divisible3Numbers(2, 100)).to.deep.equal([16n, 81n]);
        expect(divisible3Numbers(10000, 100000)).to.deep.equal([14641n, 28561n, 83521n]);
    });
   

    it("Edge Cases", function() {
        expect(divisible3Numbers(624, 625)).to.deep.equal([625n]);
        expect(divisible3Numbers(625, 626)).to.deep.equal([625n]);
        expect(divisible3Numbers(734, 735)).to.deep.equal([]);
    });
});
