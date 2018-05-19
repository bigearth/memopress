let fixtures = require('./fixtures/memopress.json')
let chai = require('chai');
let assert = require('assert');
let memopress = require('../index');

describe('#memopress', () => {
  describe('#memo', () => {
    describe('#encode', () => {
      fixtures.memo.encode.forEach((fixture) => {
        it(`should encode memo`, () => {
          let data;
          if(fixture.prefix === '0x6d03') {
            data = memopress.encode(fixture.prefix, {txHash: fixture.data.txHash, message: fixture.data.message});
          } else if(fixture.prefix === '0x6d0C') {
            data = memopress.encode(fixture.prefix, {topic: fixture.data.topic, message: fixture.data.message});
          } else {
            data = memopress.encode(fixture.prefix, fixture.data);
          }
          assert.equal(data.toString('hex'), fixture.hex);
        });
      });
    });

    describe('#decode', () => {
      fixtures.memo.decode.forEach((fixture) => {
        it(`should decode ${fixture.asm}`, () => {
          let data = memopress.decode(fixture.asm);
          assert.deepEqual(data, fixture.data);
        });
      });
    });
  });

  describe('#blockpress', () => {
    describe('#encode', () => {
      fixtures.blockpress.encode.forEach((fixture) => {
        it(`should encode blockpress`, () => {
          let data;
          if(fixture.prefix === '0x8d03') {
            data = memopress.encode(fixture.prefix, {txHash: fixture.data.txHash, message: fixture.data.message});
          } else if(fixture.prefix === '0x8d09') {
            data = memopress.encode(fixture.prefix, {mediaType: fixture.data.mediaType, mediaPayload: fixture.data.mediaPayload, mediaText: fixture.data.mediaText});
          } else if(fixture.prefix === '0x8d11') {
            data = memopress.encode(fixture.prefix, {community: fixture.data.community, message: fixture.data.message});
          } else {
            data = memopress.encode(fixture.prefix, fixture.data);
          }
          assert.equal(data.toString('hex'), fixture.hex);
        });
      });
    });

    describe('#decode', () => {
      fixtures.blockpress.decode.forEach((fixture) => {
        it(`should decode ${fixture.asm}`, () => {
          let data = memopress.decode(fixture.asm);
          assert.deepEqual(data, fixture.data);
        });
      });
    });
  });
});
