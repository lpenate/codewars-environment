import { assert } from 'chai';
import findEvenIndex  from '../js/equalSidesOfAnArray.js';


describe("FindEvenIndex", function() {
    it(" test", function() {
    assert.equal(findEvenIndex([1,2,3,4,3,2,1]), 3, "The array was: [1,2,3,4,3,2,1]");
    assert.equal(findEvenIndex([1,100,50,-51,1,1]), 1, "The array was: [1,100,50,-51,1,1]");
    assert.equal(findEvenIndex([1,2,3,4,5,6]), -1, "The array was: [1,2,3,4,5,6]");
    assert.equal(findEvenIndex([20,10,30,10,10,15,35]), 3, "The array was: [20,10,30,10,10,15,35]");
    assert.equal(findEvenIndex([1,2,3,4,5,6,7,8,9,10]), -1, "The array was: [1,2,3,4,5,6,7,8,9,10]");
    assert.equal(findEvenIndex([10,20,30,40,50,60,70,80,90,100]), -1, "The array was: [10,20,30,40,50,60,70,80,90,100]");
    assert.equal(findEvenIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), -1, "The array was: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]");});
  });