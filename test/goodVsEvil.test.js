
import { expect } from 'chai';
import { goodVsEvil } from '../js/goodVsEvil.js'; 

describe("Sample tests", () => {
  it("Evil wins", () => {
    expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).to.equal('Battle Result: Evil eradicates all trace of Good');
  });
  it("Good wins", () => {
    expect(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')).to.equal('Battle Result: Good triumphs over Evil');
  });
  it("No winner", () => {
    expect(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')).to.equal('Battle Result: No victor on this battle field');
  });
});