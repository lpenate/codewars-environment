import { assert } from 'chai';
import  phoneNumber from '../js/phoneNumber.js'; 

describe("Create Phone Number", () => {
  it("should genetare a right phone number format", () => {
    assert.strictEqual(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(phoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});

