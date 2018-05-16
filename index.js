let _ = require('underscore');

exports.decode = function(op_return) {
  let memoPrefixes = [365, 621, 877, 1133, 1389, 1645, 1901, 3181];
  let blockpressPrefixes = [397, 653, 909, 1165, 1677, 1933, 2189, 2445, 4237, 4493];

  let split = op_return.split(" ");
  let prefix = +split[1];
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

    let obj;
    memo.forEach((val, index) => {
      if(prefix === val[1]) {
        let asm
        if(prefix === 877) {
          asm = `${split[0]} ${memoo[index][0]} ${split[3]}`;
        } else {
          asm = `${split[0]} ${memo[index][0]} ${split[2]}`;
        }
        let fromASM = this.props.bitbox.Script.fromASM(asm)
        let decoded = this.props.bitbox.Script.decode(fromASM)
        obj = {
          asm: asm,
          prefix: memo[index][0],
          action: memo[index][2],
          message: decoded[2].toString('ascii')
        };
      }
    });

    console.log("memo: ", obj);
  } else if(_.includes(blockpressPrefixes, prefix)){
    console.log("blockpress: ", prefix);
  }
}
