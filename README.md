## MemoPress

Helper methods for reading/writing to the Bitcoin Cash blockchain per the [Memo](https://memo.cash/protocol) and [BlockPress](https://www.blockpress.com/developers/blockpress-protocol) protocols.

## Usage

Install

```js
npm install memopress --save
```

Require

```js
let memopress = require('memopress');
```

### Decode

#### Memo

```js
memopress.decode('OP_RETURN 365 746573742032')
// { service: 'memo',
//   prefix: '0x6d01',
//   action: 'Set Name',
//   message: 'test 2' }

memopress.decode('OP_RETURN 621 4c6f72656d20697073756d20646f6c6f722073697420616d65742c20636f6e73656374657475722061646970697363696e6720656c6974');
// { service: 'memo',
//   prefix: '0x6d02',
//   action: 'Post Memo',
//   message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }

memopress.decode('877 fe32a4bc5a52ce9b861725462ad7d5d223d3554532eb172c7d29feca5722d44c 5468616e6b7320666f72207469707072626f7421');
// { service: 'memo',
//   prefix: '0x6d03',
//   action: 'Reply',
//   message: 'Thanks for tipprbot!' }

memopress.decode('OP_RETURN 1133 1f1f63293441c673033f9112bab1b3071b2f06f68d3032a23ba9eda819694520');
// { service: 'memo',
//   prefix: '0x6d04',
//   action: 'Like',
//   message: '\u001f\u001fc)4AFs\u0003?\u0011\u0012:13\u0007\u001b/\u0006v\r02";)m(\u0019iE ' }

memopress.decode('OP_RETURN 1389 566572696669636174696f6e3a2068747470733a2f2f747769747465722e636f6d2f6d656d6f6263682f7374617475732f393932303333363532373635373030303937');
// { service: 'memo',
//   prefix: '0x6d05',
//   action: 'Set Profile Text',
//   message: 'Verification: https://twitter.com/memobch/status/992033652765700097' }

memopress.decode('OP_RETURN 1645 fe686b9b2ab589a3cb3368d02211ca1a9b88aa42');
// { service: 'memo',
//   prefix: '0x6d06',
//   action: 'Follow',
//   message: '~hk\u001b*5\t#K3hP"\u0011J\u001a\u001b\b*B' }

memopress.decode('OP_RETURN 1901 fe686b9b2ab589a3cb3368d02211ca1a9b88aa42');
// { service: 'memo',
//   prefix: '0x6d07',
//   action: 'Unfollow',
//   message: '~hk\u001b*5\t#K3hP"\u0011J\u001a\u001b\b*B' }

memopress.decode('OP_RETURN 3181 4c657427732074616c6b2061626f757420546563686e6f -10985456');
// { service: 'memo',
//   prefix: '0x6d0C',
//   action: 'Post Topic Message',
//   message: 'Let\'s talk about Techno' }
```

#### BlockPress

```js
memopress.decode('OP_RETURN 653 48656c6c6f20576f726c6421')
// { service: 'blockpress',
//   prefix: '0x8d02',
//   action: 'Create Text Post',
//   message: 'Hello World!' }
```
