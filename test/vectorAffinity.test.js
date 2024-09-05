import { expect } from 'chai';
import vectorAffinity from '../js/vectorAffinity.js';
const EPSILON = 1e-8;

describe("Vector affinity", function() {
    it("example tests", function() {
      expect(vectorAffinity([1,2,3,4,5],[1,2,2,4,3])).to.be.closeTo(3/5, EPSILON);
      expect(vectorAffinity([1,2,3],[1,2,3])).to.be.closeTo(1, EPSILON);
      expect(vectorAffinity([1,2,3],[1,2,3,4,5])).to.be.closeTo(3/5, EPSILON);
      expect(vectorAffinity([1,2,3,4],[1,2,3,5])).to.be.closeTo(3/4, EPSILON);
      expect(vectorAffinity([6,6,6,6,6,6],[6])).to.be.closeTo(1/6, EPSILON);
      expect(vectorAffinity([null],[])).to.be.closeTo(0, EPSILON);
      expect(vectorAffinity([null],[null])).to.be.closeTo(1, EPSILON);
      expect(vectorAffinity([null],[null,null])).to.be.closeTo(1/2, EPSILON);
      expect(vectorAffinity([],[])).to.be.closeTo(1, EPSILON);
    });
  });