let fixtures = require('./fixtures/memopress.json')
let chai = require('chai');
let assert = require('assert');
let memopress = require('memopress');

describe('#memopress', () => {
  describe('#memo', () => {
    fixtures.memo.forEach((fixture) => {
      it(`should decode ${fixture.asm}`, () => {
        let data = memopress.decode(fixture.asm);
        assert.equal(data, fixture.data);
      });
    });
  });
});
