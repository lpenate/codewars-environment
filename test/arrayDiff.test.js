import { assert } from 'chai';
import arrayDiff  from '../js/arrayDiff.js';
describe("Basic tests", () => {
    it("Should pass Basic tests", () => {
      assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
      assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
      assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
      assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
      assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
      assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
    });
  });