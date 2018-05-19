let fixtures = require('./fixtures/memopress.json')
let chai = require('chai');
let assert = require('assert');
let memopress = require('../index');

describe('#memopress', () => {
  describe('#memo', () => {
    describe('#decode', () => {
      fixtures.memo.forEach((fixture) => {
        it(`should decode ${fixture.asm}`, () => {
          let data = memopress.decode(fixture.asm);
          assert.deepEqual(data, fixture.data);
        });
      });
    });
  });

  describe('#blockpress', () => {
    describe('#decode', () => {
      fixtures.blockpress.forEach((fixture) => {
        it(`should decode ${fixture.asm}`, () => {
          let data = memopress.decode(fixture.asm);
          assert.deepEqual(data, fixture.data);
        });
      });
    });
  });
});
