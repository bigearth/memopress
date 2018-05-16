let _ = require('underscore');

exports.decode = function(op_return) {
  let memoPrefixes = [365, 621, 877, 1133, 1389, 1645, 1901, 3181];
  let blockpressPrefixes = [397, 653, 909, 1165, 1677, 1933, 2189, 2445, 4237, 4493];

  let split = op_return.split(" ");
  let prefix = +split[1];
  if(_.includes(memoPrefixes, prefix)){
    console.log("memo: ", prefix);
  } else if(_.includes(blockpressPrefixes, prefix)){
    console.log("blockpress: ", prefix);
  }
}
