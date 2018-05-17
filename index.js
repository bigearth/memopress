let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
  protocol: 'http',
  host: '127.0.0.1',
  port: 8332,
  username: '',
  password: '',
  corsproxy: 'remote'
});
let _ = require('underscore');

exports.decode = function(op_return) {
  let memoPrefixes = [365, 621, 877, 1133, 1389, 1645, 1901, 3181];
  let blockpressPrefixes = [397, 653, 909, 1165, 1677, 1933, 2189, 2445, 4237, 4493];

  let split = op_return.split(" ");
  let prefix = +split[1];
  let data;
  if(_.includes(memoPrefixes, prefix)){

    let memo = [
      ['6d01', 365, 'Set Name'],
      ['6d02', 621, 'Post Memo'],
      ['6d03', 877, 'Reply'],
      ['6d04', 1133, 'Like'],
      ['6d05', 1389, 'Set Profile Text'],
      ['6d06', 1645, 'Follow'],
      ['6d07', 1901, 'Unfollow'],
      ['6d0C', 3181, 'Post Topic Message']
    ];

    memo.forEach((val, index) => {
      if(prefix === val[1]) {
        let asm
        if(prefix === 877) {
          asm = `${split[0]} ${memo[index][0]} ${split[3]}`;
        } else {
          asm = `${split[0]} ${memo[index][0]} ${split[2]}`;
        }
        let fromASM = BITBOX.Script.fromASM(asm)
        let decoded = BITBOX.Script.decode(fromASM)
        data = {
          service: 'memo',
          prefix: `0x${memo[index][0]}`,
          action: memo[index][2],
          message: decoded[2].toString('ascii')
        };
      }
    });
  } else if(_.includes(blockpressPrefixes, prefix)){

    let blockpress = [
      ['8d01', 397, 'Set Name'],
      ['8d02', 653, 'Create Text Post'],
      ['8d03', 909, 'Reply'],
      ['8d04', 1165, 'Like'],
      ['8d06', 1677, 'Follow'],
      ['8d07', 1933, 'Unfollow'],
      ['8d08', 2189, 'Set Profile Header'],
      ['8d09', 2445, 'Create Media Post'],
      ['8d10', 4237, 'Set Profile Avatar'],
      ['8d11', 4493, 'Create Post in Community']
    ];

    blockpress.forEach((val, index) => {
      if(prefix === val[1]) {
        let asm
        if(prefix === 2445 || prefix === 4493) {
          asm = `${split[0]} ${blockpress[index][0]} ${split[3]}`;
        } else {
          asm = `${split[0]} ${blockpress[index][0]} ${split[2]}`;
        }

        let fromASM = BITBOX.Script.fromASM(asm);
        let decoded = BITBOX.Script.decode(fromASM);

        data = {
          service: 'blockpress',
          prefix: `0x${blockpress[index][0]}`,
          action: blockpress[index][2],
          message: decoded[2].toString('ascii')
        };
      }
    });
  }

  return data;
}
